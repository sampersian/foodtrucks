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

module.exports = router;
