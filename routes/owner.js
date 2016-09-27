"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// /owner
router.get('/', function (req, res, next) {
  //If the user is logged in
  // res.render('owner');
  //IF not
  res.render('login');
})

router.post('/signup', function (req, res, next) {
  if(req.body.ownerSignupPassword != req.body.ownerSignupPassword2){
    console.log('passwords do not match');
		res.render("signup")
	}

  queries.addNewOwner(req.body.ownerSignupFirst, req.body.ownerSignupLast, req.body.ownerSignupUsername, req.body.ownerSignupPassword, req.body.ownerSignupEmail)
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
