const { User } = require('../models');

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
}

module.exports = UserController;
