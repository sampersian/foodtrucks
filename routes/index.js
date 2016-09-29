"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')

router.get('/', function(req, res, next) {
  if(!req.user) {
    next();
	}else {
    res.render('index',{loggedIn: "yes"});

	}
});
router.get('/',function(req,res,next){
  res.render('index');
})

router.get('/today/locations', function (req, res, next) {
  queries.GetScheduleDay()
  .then((data) => {
    res.send(data);
  })
})

router.get('/', function (req, res, next) {
  return knex('user')
  .then(function(user) {
      console.log(user);
      res.render('layout', {user: user});
    })
   .catch(function(error) {return next(error);
  });
});


module.exports = router;
