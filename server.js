'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const auth = require('http-auth');
const morgan = require('morgan');

const jsforce = require('jsforce');

const port = process.env.PORT || 3000;

// Basic auth
// Set USER and PASSWORD environment variables
const basic = auth.basic({
    realm: 'Lightning Developer Tools'
  }, (username, password, callback) =>
    callback(username === process.env.USERNAME && password === process.env.PASSWORD));

if (process.env.USERNAME && process.env.PASSWORD) {
  app.use(auth.connect(basic));
}

app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use(morgan('combined'));

app.use('/', express.static('./dist'));

app.post('/describeMetadata', (req, res) => {
  console.log('body', req.body);
  let conn = new jsforce.Connection(req.body);
  conn.metadata.describe((err, result) => {
    if(err) res.json(err);
    console.log('result', result);
    res.json(result);
  });
});

app.listen(port, () =>
  console.log(`Listening on ${port}!`));