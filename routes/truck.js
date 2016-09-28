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
  var data={};
  return queries.getScheduleTruck(req.params.id)
  .then(function(result){
    data=result;
    for(var search in data){
      if(data[search].open_time > 1200){
        data[search].open_time=data[search].open_time-1200;
      }
      if(data[search].close_time > 1200){
        data[search].close_time=data[search].close_time-1200;
      }
    }
    res.render('truck', {
        truck: data,
    });
  })
})

router.get('/info/:id', function (req, res, next) {
  return queries.getOneTruckToday(req.params.id)
  .then((truck_data) => {
    res.send({data: truck_data[0]});
  })
})

module.exports = router;
// https://galvanize-ps.roomzilla.net/rooms/banana-room-lower-level/reservations/5262977/edit
