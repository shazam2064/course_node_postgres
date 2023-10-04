const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({
    message: 'The monsters api server is running.'
  })
});

app.use('/', routes);

app.use((err, req, res, next) => {
  res.json(err);
});

module.exports = app;