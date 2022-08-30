var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const CheckRole = require('../middlewares/roleValidator');

router.get('/', CheckRole.isAdmin, UserController.getAllUsers);
router.delete('/:id', UserController.deleteUser);

module.exports = router;
