"use strict"

var express = require('express');
var router = express.Router();

// /logout
router.get('/', function (req, res, next) {
  //Log out user
  res.render('index')
})

module.exports = router;
