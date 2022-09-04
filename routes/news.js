const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const Validator = require('../middlewares/validator');

const NewsController = require('../controllers/newsController');
const RoleValidator = require('../middlewares/roleValidator');

router.post(
  '/',
  body('name', 'name required').notEmpty(),
  body('content', 'content required').notEmpty(),
  body('image', 'image required').notEmpty(),
  body('categoriesId', 'categoryId required').notEmpty().bail(),
  body('categoriesId', 'categoryId must be int').isInt(),
  Validator.validateField,
  RoleValidator.isAdmin,
  NewsController.create
);

router.get('/:id', RoleValidator.isAdmin, NewsController.getById);
router.delete('/:id', RoleValidator.isAdmin, NewsController.deleteNew);
//router.get('/:id', NewsController.deleteNew);m

module.exports = router;
