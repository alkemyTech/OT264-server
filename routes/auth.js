const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const { validateField } = require('../middlewares/validateField');

const UserController = require('../controllers/userController');
const userController = new UserController();

router.post(
  '/register',
  body('firstName', 'firstName required').notEmpty(),
  body('lastName', 'lastName required').notEmpty(),
  body('email', 'invalid email').notEmpty().bail().isEmail(),
  body('password', 'password required').notEmpty(),
  validateField,
  async function (req, res) {
    try {
      const response = await userController.create(req.body);
      res.send(response);
    } catch (error) {
      console.log(error);
      res.send('Error en registro');
    }
  }
);

module.exports = router;
