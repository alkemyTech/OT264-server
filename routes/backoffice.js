const express = require('express');
const router = express.Router();
const IsRole = require('../middlewares/roleValidator');

const BackofficeController = require('../controllers/backofficeController');

router.get('/contacts', IsRole.isAdmin, BackofficeController.getContacts);

module.exports = router;
