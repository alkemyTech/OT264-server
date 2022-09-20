const JwtUtils = require('../utils/jwtUtils');
const UserController = require('../controllers/userController');

class RoleValidator {
  static async isAdmin(req, res, next) {
    //Extract email from token and get user data
    let user;
    try {
      const payloadToken = JwtUtils.verifyToken(req);
      user = await UserController.getByEmail(payloadToken.email);
    } catch (error) {
      return res.status(401).send(error.message);
    }
    const { roleId } = user;
    //Verify role admin -> In Roles Table id 1 is admin
    if (roleId !== 1) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }
    next();
  }
}

module.exports = RoleValidator;
