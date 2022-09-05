var express = require('express');
var router = express.Router();
const MembersController = require('../controllers/membersController');

router.delete('/:id', MembersController.deleteMember);

module.exports = router;
