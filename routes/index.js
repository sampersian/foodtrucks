"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries.js')





/* GET home page. */
router.get('/', function(req, res, next) {
  if(!req.user) {
    console.log('router get /login !req.user')
    res.render('login',{Message: "Login Message: You did not login"});
	}else {
    console.log('router get /login success')
    res.render('index',{Message: "Login Message: You did login" , loggedIn: "yes"});
	}


  //res.render('index');
});

router.get('/today/locations', function (req, res, next) {
  queries.GetScheduleDay()
  .then((data) => {
    res.send(data);
  })
})

module.exports = router;
