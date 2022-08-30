const jwt = require('jsonWebToken');
const { JWTAuthenticationError } = require('../utils/error');
const { User } = require('../models');

class Authentication {
  static async isAuthenticated(req, res, next) {
    console.log(req.headers);
    if (req.headers.authorization) {
      let token = req.headers.authorization.split(/\s+/)[1];
      console.log(token);
      try {
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        console.log(payload);
        const user = await User.findOne({ where: { email: payload.email } });
        if (user) {
          req.user = user;
          next();
        } else {
          console.log('error access');
          throw new JWTAuthenticationError();
        }
      } catch (err) {
        throw new JWTAuthenticationError(err.message);
      }
    } else {
      throw new JWTAuthenticationError();
    }
  }
}
module.exports = Authentication;
