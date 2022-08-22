var express = require('express');
var router = express.Router();
const UserController = require('../controllers/userController');
const userController = new UserController();
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/email', async function (req, res, next) {
  try {
    const { email, subject, body } = req.body;
    await userController.sendEmail(email, subject, body);
    res.send('Email send');
  } catch (error) {
    console.log(error);
    res.send(error.message);
  }
});

module.exports = router;
