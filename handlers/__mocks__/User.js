const { genCreatedAt, genJWT, genUUUID } = require('../../helpers/index');
const register = jest.fn(body => {
  const { user } = body;
  const jwt = genJWT(user.email);
  return {
    id: genUUUID(),
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    created: genCreatedAt(),
    token: jwt
  };
});

module.exports = {
  register
};
