"use strict"
var passport = require('../passport')
var express = require('express');
var router = express.Router();

// login
router.get('/', function(req, res, next) {
	if(!req.user) {
    console.log('router get /login !req.user')
    res.render('login',{Message: "Login Message: You did not login"});
	}else {
    console.log('router get /login success')
    res.render('login',{Message: "Login Message: You did login" /*, loggedIn: "yes"*/});
	}
});


router.post('/', passport.authenticate('local', {
	successRedirect: '/login', //change back to /
	failureRedirect: '/login',
	failureFlash: "Incorrect username or password.",
	successFlash: "Welcome!"
}));



module.exports = router;
