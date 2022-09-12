var express = require('express');
var router = express.Router();
const CommentsController = require('../controllers/commentsController');
const CheckRole = require('../middlewares/roleValidator');

router.get('/', CheckRole.isAdmin, CommentsController.getAll);

module.exports = router;
