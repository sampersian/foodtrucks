"use strict"
var passport = require('../passport')
var express = require('express');
var router = express.Router();

// login
router.get('/', function(req, res, next) {
	if(req.user) {
    console.log('Login was successful');
		res.redirect('/');
	}else {
		res.render('login',{Message: "Login Message: You did not login"});
	}
});


router.post('/', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login',
	failureFlash: "Incorrect username or password.",
	successFlash: "Welcome!"
}));



module.exports = router;
