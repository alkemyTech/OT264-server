const { JWTAuthenticationError, UserExistsError } = require('../utils/error');
const UserController = require('../controllers/userController');
const JwtUtils = require('../utils/jwtUtils');
const { User } = require('../models');

class Ownership {
  static async isAdmin(req, res, next) {
    let user;
    try {
      const payload = JwtUtils.verifyToken(req);
      user = await UserController.getByEmail(payload.email);
    } catch (error) {
      return res.send(new JWTAuthenticationError(error.messague));
    }
    if (!user) {
      return res.send(new UserExistsError('The email is not associated with a valid account'));
    }
    req.user = user;
    try {
      const { id } = user;
      const verifiedUser = await User.findByPk(id);
      if (verifiedUser.roleId === 1) {
        next();
      } else {
        res.status(403).json({ msg: 'Admin role necessary' });
      }
    } catch (e) {
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = Ownership;
