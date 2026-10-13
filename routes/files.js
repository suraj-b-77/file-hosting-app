const express = require('express');
const User = require('../models/User');
const { isAuthenticated } = require('../middleware/auth');

const router = express.Router();

router.get('/login', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/files');
  }

  res.render('login', { error: null, user: null });
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).render('login', {
      error: 'Email and password are required.',
      user: null,
    });
  }

  try {
    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return res.status(400).render('login', {
        error: 'Invalid email or password.',
        user: null,
      });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(400).render('login', {
        error: 'Invalid email or password.',
        user: null,
      });
    }

    req.session.userId = user._id;
    res.redirect('/files');
  } catch (error) {
    res.status(500).render('login', {
      error: 'Something went wrong. Please try again.',
      user: null,
    });
  }
});

router.get('/register', (req, res) => {
  if (req.session.userId) {
    return res.redirect('/files');
  }

  res.render('register', { error: null, user: null });
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).render('register', {
      error: 'Name, email, and password are required.',
      user: null,
    });
  }

  if (password.length < 6) {
    return res.status(400).render('register', {
      error: 'Password must be at least 6 characters long.',
      user: null,
    });
  }

  try {
    const existingUser = await User.findOne({ email: email.toLowerCase() });

    if (existingUser) {
      return res.status(400).render('register', {
        error: 'An account with that email already exists.',
        user: null,
      });
    }

    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password,
    });

    req.session.userId = user._id;
    res.redirect('/files');
  } catch (error) {
    res.status(500).render('register', {
      error: 'Unable to create account. Please try again.',
      user: null,
    });
  }
});

router.get('/logout', isAuthenticated, (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.error('Logout error:', error);
    }
    res.redirect('/login');
  });
});

module.exports = router;
