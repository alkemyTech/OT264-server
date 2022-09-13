var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/commentsController');
const CheckRole = require('../middlewares/roleValidator');
const isUser = require('../middlewares/ownership');

router.get('/', CheckRole.isAdmin, CommentsController.getAll);
router.delete('/:id', isUser.isUser, CommentsController.deleteComment);

module.exports = router;
