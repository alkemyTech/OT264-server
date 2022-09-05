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
  body('categoriesId', 'categoriesId required').notEmpty().bail(),
  body('categoriesId', 'categoriesId must be int').isInt(),
  Validator.validateField,
  RoleValidator.isAdmin,
  NewsController.create
);

router.get('/:id', RoleValidator.isAdmin, NewsController.getById);
router.put(
  '/:id',
  RoleValidator.isAdmin,
  body('name', 'name required').notEmpty(),
  body('content', 'content required').notEmpty(),
  body('image', 'image required').notEmpty(),
  body('categoriesId', 'categoriesId required').notEmpty().bail(),
  body('categoriesId', 'categoriesId must be int').isInt(),
  Validator.validateField,
  NewsController.updateNews
);

module.exports = router;
