var express = require('express');
var router = express.Router();
const SlidesController = require('../controllers/slidesController');
const RoleValidator = require('../middlewares/roleValidator');

router.put('/:id', RoleValidator.isAdmin, SlidesController.updateSlides);

module.exports = router;
