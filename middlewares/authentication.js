const { JWTAuthenticationError, UserExistsError } = require('../utils/error');
const UserController = require('../controllers/userController');
const JwtUtils = require('../utils/jwtUtils');

class Authentication {
  static async isAuthenticated(req, res, next) {
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
    next();
  }
}
module.exports = Authentication;
