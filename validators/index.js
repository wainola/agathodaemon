const Joi = require('joi');

const userSchema = Joi.object().keys({
  user: Joi.object().keys({
    name: Joi.string().required(),
    lastname: Joi.string().required(),
    email: Joi.string().required()
  })
});

const userLoginSchema = Joi.object().keys({
  user: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
})

module.exports = {
  userSchema,
  userLoginSchema
};
