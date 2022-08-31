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
  body('categoryId', 'categoryId required').notEmpty().bail(),
  body('categoryId', 'categoryId must be int').isInt(),
  Validator.validateField,
  RoleValidator.isAdmin,
  NewsController.create
);

module.exports = router;
