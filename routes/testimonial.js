var express = require('express');
var router = express.Router();
const TestimonialController = require('../controllers/testimonialsController');
const RoleValidator = require('../middlewares/roleValidator');

router.put('/:id', RoleValidator.isAdmin, TestimonialController.updateTestimonial);

module.exports = router;
