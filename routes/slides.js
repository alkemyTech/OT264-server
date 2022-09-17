var express = require('express');
var router = express.Router();
const SlidesController = require('../controllers/slidesController');
const RoleValidator = require('../middlewares/roleValidator');

router.put('/:id', RoleValidator.isAdmin, SlidesController.updateSlides);
router.get('/:id', RoleValidator.isAdmin, SlidesController.getById);
router.get('/', RoleValidator.isAdmin, SlidesController.getAll);
router.delete('/:id', RoleValidator.isAdmin, SlidesController.delete);
router.post('/', RoleValidator.isAdmin, SlidesController.create);
module.exports = router;
