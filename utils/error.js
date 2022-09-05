//manejo de errores

class JWTAuthenticationError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'Token authentication error';
    this.status = 403;
    this.name = 'JWTAuthenticationError';
  }
}
class UserExistsError extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'The email is already associated with an account';
    this.status = 400;
    this.name = 'UserExistsError';
  }
}
class NotFound extends Error {
  constructor(message) {
    super(message);
    this.message = message || 'There is nothig here';
    this.status = 404;
    this.name = 'NotFound';
  }
}
module.exports = {
  JWTAuthenticationError,
  UserExistsError,
  NotFound
};
