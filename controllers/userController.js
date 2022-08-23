const { User } = require('../models');
const bcrypt = require('bcrypt');
class UserController {
  async create(data) {
    data.password = await this.encryptPassword(data.password);
    const newUser = await User.create(data);
    delete newUser.dataValues.password;
    return newUser;
  }
  async encryptPassword(password) {
    const salt = await bcrypt.genSalt();
    const passwordEncripted = await bcrypt.hash(password, salt);
    return passwordEncripted;
  }
}

module.exports = UserController;
