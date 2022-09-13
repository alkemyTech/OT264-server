var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/commentsController');
const RoleValidator = require('../middlewares/roleValidator');
const isUser = require('../middlewares/ownership');

router.get('/', RoleValidator.isAdmin, CommentsController.getAll);
router.delete('/:id', isUser.isUser, CommentsController.deleteComment);

module.exports = router;
