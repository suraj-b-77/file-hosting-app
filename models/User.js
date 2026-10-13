const User = require('../models/User');

const isAuthenticated = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
};

const attachUser = async (req, res, next) => {
  try {
    if (req.session.userId) {
      req.user = await User.findById(req.session.userId).select('-password');
    } else {
      req.user = null;
    }
    next();
  } catch (error) {
    req.user = null;
    next();
  }
};

module.exports = { isAuthenticated, attachUser };
