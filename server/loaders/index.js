const { expressLoader } = require('./express');
const router = require('../api/routes/index');
const cors = require('./cors');
async function init(expressApp) {
  expressLoader(expressApp);
  cors.load(expressApp);
  router.init(expressApp);
}

module.exports = init;
