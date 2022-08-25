class RoleValidator {
  static async isAdmin(req, res, next) {
    const { roleId } = req.user;

    if (roleId !== 1) {
      return res.status(401).send({ msg: 'Unauthorized' });
    }

    next();
  }
}

module.exports = RoleValidator;
