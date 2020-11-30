var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const { v4: uuidv4 } = require('uuid');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Generated resource ID: ' + uuidv4());
});


router.post('/', jsonParser, function(req, res, next) {
const body = req.body
const username = body.username
res.send('Hello: ' + username);
});


module.exports = router;
