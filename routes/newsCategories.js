var express = require('express');
var router = express.Router();
const NewsCategoriesController = require('../controllers/newsCategoriesController');
const RoleValidator = require('../middlewares/roleValidator');

router.post('/', RoleValidator.isAdmin, NewsCategoriesController.create);
router.delete('/:id', RoleValidator.isAdmin, NewsCategoriesController.deleteCategories);
<<<<<<< HEAD
router.get('/', RoleValidator.isAdmin, NewsCategoriesController.nameCategories);
=======
router.put('/:id', RoleValidator.isAdmin, NewsCategoriesController.updateCategory);
router.get('/:id', RoleValidator.isAdmin, NewsCategoriesController.show);
>>>>>>> 2bf08352f304e133c50f6908030e3f88def2af8c

module.exports = router;
