"use strict"

var express = require('express');
var router = express.Router();

// /logout
router.get('/logout', function(req, res, next) {
	req.logout();
	res.redirect('/');
})

module.exports = router;
