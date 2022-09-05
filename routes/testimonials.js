const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');
const TestimonialsController = require('../controllers/testimonialsController');
const RoleValidator = require('../middlewares/roleValidator');

router.post(
  '/',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('content', 'content required').notEmpty(),
  Validator.validateField,
  TestimonialsController.create
);

module.exports = router;
