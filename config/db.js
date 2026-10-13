const express = require('express');
const path = require('path');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { attachUser } = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const filesRoutes = require('./routes/files');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/filehoster';

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
  session({
    secret: process.env.SESSION_SECRET || 'filehoster-secret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: MONGO_URI,
      dbName: 'filehoster',
      collectionName: 'sessions',
      ttl: 60 * 60 * 24 * 7,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      secure: false,
    },
  })
);

app.use(attachUser);

app.get('/', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/files');
  }
  return res.redirect('/login');
});

app.use('/', authRoutes);
app.use('/files', filesRoutes);

app.use((req, res) => {
  res.status(404).render('404', { user: req.user || null });
});

const startServer = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log('MongoDB connected');

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

startServer();
