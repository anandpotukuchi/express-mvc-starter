var express = require('express');
var Route = express.Router();

var userController = require('../controllers/user_controller');


// API Routes
Route
  .get('/', userController.get_index)
  .post('/new', userController.addUser)
  .get('/all', userController.getAll)
  .put('/single/:id', userController.getOneById)
  .delete('/remove')
  

module.exports = Route
