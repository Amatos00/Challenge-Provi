const routes = require('express').Router();
const usersRouter = require('./users-routes');

routes.use(usersRouter);


module.exports = routes;



