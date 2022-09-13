var express = require('express');
var router = express.Router();
const TestimonialController = require('../controllers/testimonialsController');
const RoleValidator = require('../middlewares/roleValidator');
const Validator = require('../middlewares/validator');
const { body } = require('express-validator');

router.post(
  '/',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('content', 'content required').notEmpty(),
  Validator.validateField,
  TestimonialController.create
);
router.put('/:id', RoleValidator.isAdmin, TestimonialController.updateTestimonial);
router.delete('/:id', RoleValidator.isAdmin, TestimonialController.deleteTestimonial);
router.get('/', TestimonialController.getAll);

module.exports = router;
