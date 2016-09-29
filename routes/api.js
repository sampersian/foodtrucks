"use strict"

var express = require('express');
var router = express.Router();

var queries = require('../db/queries.js');

router.get('/info/:id', function (req, res, next) {
  return queries.getOneTruckToday(req.params.id)
  .then((data) => {
    let truck_data = data[0];
    return queries.GetTruckReviews(req.params.id)
    .then((review_data) => {
      truck_data.reviews = review_data;
      res.send({data: truck_data});
    })
  })
})

router.get('/schedule/:id', function (req, res, next) {
  return queries.getScheduleTruck(req.params.id)
  .then((data) => {
    res.send(data)
  })
})


module.exports = router;
