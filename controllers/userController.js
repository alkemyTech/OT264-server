const { User } = require('../models');
const bcrypt = require('bcrypt');

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

  static async create(req, res) {
    const data = req.body;
    try {
      data.password = await UserController.encryptPassword(data.password);
      const newUser = await User.create(data);
      delete newUser.dataValues.password;
      res.status(200).send(newUser);
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
}

module.exports = UserController;
