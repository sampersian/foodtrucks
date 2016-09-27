"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')

router.get('/', function (req, res, next) {
  res.render('events');
})

router.get('/new', function (req, res, next) {
  res.render('newEvent');
})

router.post('/new', function (req, res, next) {
  console.log(req.body);
  res.render('events');
})

router.get('/truck/:id', function (req, res, next) {
  //query for all events for a specific truck (req.params.id)
  res.send()
})

router.get('/date/:date', function (req, res, next) {
  //query for all events on a specific date
  res.send()
})

module.exports = router;
