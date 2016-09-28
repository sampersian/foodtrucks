"use strict"
var passport = require('../passport')

var express = require('express');
var router = express.Router();

// login
router.get('/', function(req, res, next) {
  if(req.user) {
		res.redirect('http://www.google.com');
	}else {
		res.render('login', {flash: req.flash()});
	}
});

router.post('/',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });

module.exports = router;
