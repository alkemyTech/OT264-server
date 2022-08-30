var express = require('express');
var router = express.Router();
const NewsCategoriesController = require('../controllers/newsCategoriesController');
const { RoleValidator, CheckRole } = require('../middlewares/roleValidator');
//const CheckRole = require('../middlewares/roleValidator')

//router.post('/', RoleValidator.isAdmin, NewsCategoriesController.create);
router.get('/categories/:id', NewsCategoriesController.show);
//router.get('/categories', NewsCategoriesController.list);

module.exports = router;
