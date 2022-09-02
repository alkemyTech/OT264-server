var express = require('express');
var router = express.Router();
const NewsCategoriesController = require('../controllers/newsCategoriesController');
const RoleValidator = require('../middlewares/roleValidator');

router.post('/', RoleValidator.isAdmin, NewsCategoriesController.create);
router.delete('/:id', RoleValidator.isAdmin, NewsCategoriesController.deleteCategories);
router.get('/', RoleValidator.isAdmin, NewsCategoriesController.nameCategories);

module.exports = router;
