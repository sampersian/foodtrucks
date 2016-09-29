"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// /owner
router.get('/', function (req, res, next) {
  res.send('hello');
})


module.exports = router;
