var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const RoleValidator = require('../middlewares/roleValidator');
const { check } = require('express-validator');
const Validador = require('../middlewares/validator');
const isUser = require('../middlewares/ownership');

router.get('/', RoleValidator.isAdmin, UserController.getAllUsers);
router.delete('/:id', RoleValidator.isAdmin, UserController.deleteUser);

router.patch(
  '/:id',
  isUser.isUser,
  check('firstName').optional(),
  check('lastName').optional(),
  check('email', 'invalid email').optional().isEmail(),
  check('password').optional(),
  check('image').optional(),
  Validador.validateField,
  UserController.updateUser
);

module.exports = router;
