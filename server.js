require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const { injectSequelize, checkExpiration } = require('./helpers/index');
const Router = require('./routes/index');

const app = express();

const { PORT } = process.env;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(injectSequelize);

app.get('/test', (request, response) =>
  response.status(200).send({ msg: 'Im alive!' })
);

app.post('/registration', Router.registration);
app.post('/login', checkExpiration, Router.login);

app.listen(PORT, err => {
  if (err) console.error('Some error', err);
  console.log(`Server listening on port ${PORT}`);
});
