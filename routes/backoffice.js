const express = require('express');
const router = express.Router();
const RoleValidator = require('../middlewares/roleValidator');

const BackofficeController = require('../controllers/backofficeController');

router.get('/contacts', RoleValidator.isAdmin, BackofficeController.getContacts);

module.exports = router;
