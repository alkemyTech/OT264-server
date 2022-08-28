class RoleValidator {
  static async isAdmin(req, res, next) {
    //Verify that user is athenticate (req.user exists)
    const user = req.user;
    if (!user) {
      return res.status(401).send({ msg: 'User must be authenticated' });
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
