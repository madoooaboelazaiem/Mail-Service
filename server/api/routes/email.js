const express = require('express');
const email = require('../../controllers/email');
const router = express.Router();

router.post('/contact', email.sendEmails);

module.exports = {
  router,
};
