const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const RoleValidator = require('../middlewares/roleValidator');

const ContactsController = require('../controllers/contactsController');

router.post(
  '/',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('email', 'email required').notEmpty(),
  Validator.validateField,
  ContactsController.create
);

router.get('/', RoleValidator.isAdmin, ContactsController.getAll);

module.exports = router;
