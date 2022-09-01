const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

class JwtUtils {
  static generateToken(payload) {
    let token = jwt.sign(payload, jwtSecret);
    return token;
  }

  static verifyToken(req) {
    const autHeader = req.headers.authorization || '';
    let token;
    if (autHeader.startsWith('Bearer ')) {
      token = autHeader.substring(7, autHeader.length);
    } else {
      throw new Error('Token requerido - Bearer token');
    }
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  }
}

module.exports = JwtUtils;
