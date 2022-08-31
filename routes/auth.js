const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const Authentication = require('../middlewares/authentication');

const UserController = require('../controllers/userController');

router.post(
  '/register',
  body('firstName', 'firstName required').notEmpty(),
  body('lastName', 'lastName required').notEmpty(),
  body('email', 'invalid email').notEmpty().bail().isEmail(),
  body('password', 'password required').notEmpty(),
  Validator.validateField,
  UserController.create
);

router.post(
  '/login',
  body('email', 'invalid email').notEmpty().bail().isEmail(),
  body('password', 'password required').notEmpty(),
  Validator.validateField,
  UserController.login
);

router.get('/me', Authentication.isAuthenticated, UserController.authenticateMe);

module.exports = router;
