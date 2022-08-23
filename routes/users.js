var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});
router.delete('/:id', UserController.deleteUser);

module.exports = router;
