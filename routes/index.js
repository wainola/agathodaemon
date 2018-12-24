const Joi = require('joi');
const { userSchema } = require('../validators/index');

class Router {
  static async registration(request, response) {
    return User.registration(request, response);
    // check body
    // send body to User router
    // or send msg that the body not match
    const { body } = request;
    const isValidJson = Joi.validate(body, userSchema);
    if (isValidJson.error === null) {
      const { container } = request;
      const sequelize = container.resolve('sequelize');
      const userRegistered = UserHandler.register(body, sequelize);
      if (userRegistered.error) {
        const error = userRegistered;
        return response.status(500).send(error);
      }
      return response.status(201).send(userRegistered.data);
    }
  }

  static async login(request, response) {}
}

module.exports = Router;
