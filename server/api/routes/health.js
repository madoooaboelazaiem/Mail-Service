const express = require('express');
const healthController = require('../../controllers/health');
const router = express.Router();

router.get('/', healthController.healthCheck);
module.exports = {
  router,
};
