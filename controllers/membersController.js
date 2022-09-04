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
  static async deleteMember(req, res) {
    const { id } = req.params;
    try {
      const member = await Member.destroy({ where: { id } });
      if (member) {
        return res.status(200).send({ msg: 'Member deleted' });
      }
      return res.status(404).send({ msg: 'Member not found' });
    } catch (error) {
      res.status(500).json({ msg: 'Internal server error' });
    }
  }
}

module.exports = MembersController;
