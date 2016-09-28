"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');

router.get('/', function(req, res, next){
  res.render('results', {title: 'Food Trucks'})
})

router.get('/results/truck/:term', function(req, res, next) {
  console.log('results');
  queries.getTrucksByName('term')
  .then(function(trucks) {
    res.redirect('results', {
      trucks: trucks
    })
  })
})

module.exports = router;
