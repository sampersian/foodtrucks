"use strict"
var passport = require('../passport')
var express = require('express');
var router = express.Router();

// login
router.get('/', function(req, res, next) {
	if(!req.user) {
    res.render('login');
	}
  else {
    res.render('index',{loggedIn: "yes"});
	}
});


router.post('/', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: "Incorrect username or password.",
	successFlash: "Welcome!"
}));

module.exports = router;
