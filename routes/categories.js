var express = require('express');
var router = express.Router();
const CategoriesController = require('../controllers/newsCategoriesController');
const CheckRole = require('../middlewares/roleValidator');


router.delete('/:id', CheckRole.isAdmin,CategoriesController.deleteCategories);

module.exports = router;
