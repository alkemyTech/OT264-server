var express = require('express');
var router = express.Router();
const CheckRole = require('../middlewares/roleValidator');

const NewsController = require('../controllers/newsController');

router.get('/:id', CheckRole.isAdmin, NewsController.getById);

module.exports = router;
