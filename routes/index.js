const Joi = require('joi');
const User = require('./User');

class Router {
  static async registration(request, response) {
    return User.registration(request, response);
  }

  static async login(request, response) {
    console.log('login')
    return User.login(request, response);
  }
}

module.exports = Router;
