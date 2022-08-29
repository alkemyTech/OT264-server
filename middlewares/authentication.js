const jwt = require('jsonWebToken');
const { JWTAuthenticationError } = require('../utils/error');
//const { catchErrors } = require('./utils');

class Authentication {
  static async isAuthenticated(req, res, next) {
    const User = req.User;
    const { email } = req.body;
    console.log(req.headers);
    //comprobar si existen token
    if (req.headers('authorization')) {
      //guarda en como lista
      let token = req.headers('authorization').split(/\s+/)[1];
      console.log(token);
      try {
        //valida token
        console.log(process.env.JWT_SECRET);
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        //console.log('verificando');
        console.log(payload);
        const user = await User.findOne({ where: { email: email } });
        if (user) {
          req.user = user;
          next();
        } else {
          console.log('error access');
          throw new JWTAuthenticationError();
        }
        //return payload;
      } catch (err) {
        throw new JWTAuthenticationError(err.message);
        //res.send(err);
        //console.log('error aaaa');
      }
    } else {
      //res.send('error')}
      throw new JWTAuthenticationError();
    }
  }
}
module.exports = Authentication;
