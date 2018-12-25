class User {
  static async registration(request, response) {
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
  static async login(request, response) {
    return response.status(201).send(true);
  }
}
