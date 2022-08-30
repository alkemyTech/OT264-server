const { User } = require('../models');
const bcrypt = require('bcrypt');
const JwtUtils = require('../utils/jwtUtils');
const WellcomeEmail = require('./welcomeEmail');

class UserController {
  static async deleteUser(req, res) {
    try {
      const { id } = req.params;
      const deleteUser = await User.destroy({ where: { id } });
      if (deleteUser) {
        return res.status(200).send({ msg: `El usuario fue eliminado` });
      }
      return res.status(400).json({ msg: 'Ese usuario no existe' });
    } catch (error) {
      res.status(404).json({ msg: 'Ah ocurrido un error' });
    }
  }
  static async getAllUsers(req, res) {
    try {
      const users = await User.findAll();
      res.status(200).json(users);
    } catch (error) {
      res.status(404).send('Ah ocurrido un error');
    }
  }

  static async create(req, res) {
    const data = req.body;
    try {
      data.password = await UserController.encryptPassword(data.password);
      const newUser = await User.create(data);
      delete newUser.dataValues.password;
      res.status(200).send(newUser);

      await WellcomeEmail.fillerEmail(data.mail, data.name, []); // envio de mail de bienvenida
    } catch (err) {
      console.log(err);
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }

  static async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const passwordEncripted = await bcrypt.hash(password, salt);
    return passwordEncripted;
  }

  static async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ where: { email: email } });
      if (user) {
        const validPass = bcrypt.compareSync(password, user.password);
        if (validPass) {
          const { email } = user.dataValues;
          const token = JwtUtils.generateToken({ email });
          res.status(200).json({ msg: 'Valid email and password', token });
        } else {
          res.json('Wrong password');
        }
      } else {
        res.status(404).json('User not found');
      }
    } catch (e) {
      console.log(e);
      res.status(500).json('ok: false');
    }
  }
}

module.exports = UserController;
