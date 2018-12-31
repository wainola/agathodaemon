require('dotenv').config();
const Container = require('./container');
const Sequelize = require('sequelize');
const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const moment = require('moment');

const { DATABASE_URL, SECRET } = process.env;

const sequelize = new Sequelize(DATABASE_URL);

// Testing the connection
sequelize
  .authenticate()
  .then(() => console.log('Success connection to the database [Agathodaemon]'))
  .catch(err => console.log('err::', err));

const injectSequelize = (request, response, next) => {
  const container = new Container();
  container.register('sequelize', sequelize);
  request.container = container;
  return next();
};

const checkExpiration = (request, response, next) => {
  let token = request.headers('authorization');
  if (!!token) {
    if (token.startsWith('Bearer')) token = token.slice(7, token.length);
    jwt.verify(token, SECRET, (err, decoded) => {
      console.log('err, decoded', err, decoded)
      if (err)
        response.status(401).send({
          success: false,
          msg: 'Token is not valid'
        });
      request.decoded = decoded;
      next();
    });
  } else {
    return response.status(401).send({
      success: false,
      msg: 'Not authorized'
    });
  }
};

const genUUUID = () => uuid.v4();

const genJWT = email => jwt.sign({ JWT: email }, SECRET, { expiresIn: '24h' });

const genCreatedAt = () => moment().format();

module.exports = {
  injectSequelize,
  checkExpiration,
  genUUUID,
  genJWT,
  genCreatedAt
};
