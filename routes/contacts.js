const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');

const ContactsController = require('../controllers/contactsController');

router.post(
  '/',
  body('name', 'name required').notEmpty(),
  body('email', 'email required').notEmpty(),
  Validator.validateField,
  ContactsController.create
);

module.exports = router;
