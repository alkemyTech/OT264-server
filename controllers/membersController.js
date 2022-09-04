const { Member } = require('../models');

class MembersController {
  static async create(req, res) {
    const data = req.body;
    let newMember;
    try {
      newMember = await Member.create(data);
    } catch (err) {
      console.log(err);
      return res.status(500).send({ msg: 'Internal Server error' });
    }
    res.status(200).send(newMember);
  }
}

module.exports = MembersController;
