const healthRouter = require('./health');
const email = require('./email');
module.exports.init = function (app) {
  app.use('/', healthRouter.router);
  app.use('/api', email.router);
};
