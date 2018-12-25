const Joi = require('joi');
const { userSchema } = require('../validators/index');
const UserHandler = require('../handlers/User');
class User {
  static async registration(request, response) {
    const { body } = request;
    const isValidJson = Joi.validate(body, userSchema);
    if (isValidJson.error === null) {
      const { container } = request;
      const sequelize = container.resolve('sequelize');
      const userRegistered = await UserHandler.register(body, sequelize);
      console.log('userRegistered', userRegistered);
      if (userRegistered.error) {
        const error = userRegistered;
        return response.status(500).send(error);
      }
      return response.status(201).send(userRegistered.data);
    }
  }
  static async login(request, response) {
    const { body } = request;
    const isValidJson = Joi.validate(body, userLoginSchema);
    if (isValidJson.error === null) {
      const { container } = request;
      const sequelize = container.resolve('sequelize');
      const userLoged = await UserHandler.login(body, sequelize);
      if (userLoged.error) {
        return response.status(500).send(userLoged.error);
      }
      return response.status(200).send(userLoged.data);
    }
  }
}

module.exports = User;
