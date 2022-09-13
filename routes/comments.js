var express = require('express');
var router = express.Router();
const { body } = require('express-validator');
const CommentsController = require('../controllers/commentsController');
const Validator = require('../middlewares/validator');
const RoleValidator = require('../middlewares/roleValidator');
const isUser = require('../middlewares/ownership');

router.get('/', RoleValidator.isAdmin, CommentsController.getAll);
router.post(
  '/',
  body('body', 'body required').notEmpty(),
  body('userId', 'userId required').notEmpty(),
  body('newId', 'newId required').notEmpty(),
  Validator.validateField,
  CommentsController.create
);
router.delete('/:id', isUser.isUser, CommentsController.deleteComment);
//router.put('/:id', isUser.isUser, CommentsController.updateComment);
router.put('/:id', CommentsController.updateComment);
module.exports = router;
