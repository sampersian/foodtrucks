"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// signup
router.get('/', function (req, res, next) {
  res.render('signup')
});

router.post('/', function (req, res, next) {
  //console.log(req.body);
  //res.render('signup')
  if(req.body.userSignupPassword != req.body.userSignupPassword2){
    console.log('passwords do not match');
		res.render("signup")
	}

  queries.addNewUser(req.body.userSignupFirst, req.body.userSignupLast, req.body.userSignupUsername, req.body.userSignupPassword, req.body.userSignupEmail)
	.then(function(data) {
    console.log('User added to database');
		res.redirect('/')
	})
	.catch(function(err){
    console.log('User signup fail');
		return next(err)
	})
})



module.exports = router;
