const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWT_SECRET;

class JwtUtils {
  static generateToken(payload) {
    let token = jwt.sign(payload, jwtSecret);
    return token;
  }

  static verifyToken(req) {
    const token = req.headers.authorization;
    if (!token) {
      throw new Error('Token requerido');
    }
    const payload = jwt.verify(token, jwtSecret);
    return payload;
  }
}

module.exports = JwtUtils;
