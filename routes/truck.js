"use strict"

var express = require('express');
var router = express.Router();

var queries = require('../db/queries.js');

// /truck
router.get('/new', function (req, res, next) {
  res.render('newTruck');
})

router.post('/new', function (req, res, next) {
  console.log(req.body);
  res.render('owner')
})

router.get('/:id', function(req,res,next) {
  return queries.getOneTruck(req.params.id)
  .then((data) => {
    console.log(data);
    res.render('truck', {truck: data[0]});
  })
})

router.get('/info/:id', function (req, res, next) {
  return queries.getOneTruckToday(req.params.id)
  .then((truck_data) => {
    res.send({data: truck_data[0]});
  })
})

module.exports = router;
