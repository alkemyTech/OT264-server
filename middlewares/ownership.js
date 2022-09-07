const { JWTAuthenticationError, UserExistsError } = require('../utils/error');
const UserController = require('../controllers/userController');
const JwtUtils = require('../utils/jwtUtils');

class Ownership {
  static async isUser(req, res, next) {
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
      if (user.roleId === 1 || id == req.params.id) {
        next();
      } else {
        res.status(403).json({ msg: 'Not user found' });
      }
    } catch (e) {
      res.status(500).json({ msg: 'Internal Server error' });
    }
  }
}

module.exports = Ownership;
