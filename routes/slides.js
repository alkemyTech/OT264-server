var express = require('express');
var router = express.Router();
const SlidesController = require('../controllers/slidesController');
const RoleValidator = require('../middlewares/roleValidator');

router.get('/:id', RoleValidator.isAdmin, SlidesController.getById);

module.exports = router;
