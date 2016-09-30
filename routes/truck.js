"use strict"

var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport = require('../passport');
var flash = require('connect-flash');
var queries = require('../db/queries.js');

function makeTimeNeat(time) {
  let stringTime = String(time);
  let hours, minutes, ampm;
  if (stringTime.length === 3) {
    hours = stringTime.substring(0,1);
    minutes = stringTime.substring(1,3);
  } else {
    hours = stringTime.substring(0,2);
    minutes = stringTime.substring(2,4);
  }
  if (hours > 12) {
    ampm = "PM";
    hours -= 12;
  } else if (hours === 12) {
    ampm = "PM";
  } else {
    ampm = "AM"
  }
  let newStringTime = hours+":"+minutes+" "+ampm;
  return newStringTime;
}

router.get('/picture', function(req, res, next) {
  return queries.User().where('username', req.user)
  .then(function(user) {
      console.log(user[0].image_url);
      // res.render('layout', {user: user[0]});

      //res.render('truck',{loggedIn: "yes", user: user[0]});
    })
   .catch(function(error) {return next(error);
  });
})

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
  queries.getScheduleTruck(req.params.id)
  .then(function(result){
    data=result;
    for(var search in data){
      if(data[search].location==="none"){
        data[search].location="Closed";
      }
      if(data[search].open_time===0){
        data[search].open_time="";
      }
      if(data[search].close_time===0){
        data[search].close_time="";
      }
      else{
        data[search].open_time=makeTimeNeat(data[search].open_time);
        data[search].close_time=makeTimeNeat(data[search].close_time);
      }
    }
  })
  .then(() => {
    return queries.GetTruckReviews(req.params.id)
  })
  .then((reviews) => {
    data.reviews=reviews;
    console.log(reviews);
    res.render('truck', {
      truck: data,
      loggedIn: "yes"
    });
  })
})

module.exports = router;
