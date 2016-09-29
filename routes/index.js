"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')

router.get('/', function(req, res, next) {
  if(!req.user) {
    next();
	}else {
    return queries.User().where('username', req.user)
    .then(function(user) {
        console.log(req.user);
        // res.render('layout', {user: user[0]});

        res.render('index',{loggedIn: "yes", user: user[0]});
      })
     .catch(function(error) {return next(error);
    });

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
  return knex('user').where('username', req.user)
  .then(function(user) {
      console.log(req.user);
      res.render('layout', {user: user[0]});
    })
   .catch(function(error) {return next(error);
  });
});


module.exports = router;
