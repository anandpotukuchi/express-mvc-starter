var express = require('express');
var Route = express.Router();

var index_controller = require('../controllers/index_controller');
var user = require('./user.route')


Route
  .get('/', index_controller.get_index)
  .use('/user', user)

module.exports = Route
