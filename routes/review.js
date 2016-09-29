"use strict"

var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport = require('../passport');
var flash = require('connect-flash');
var queries = require('../db/queries');

// Submit review
router.post('/new', function (req,res,next) {
  queries.getAllReviews().insert({
    username: req.user,
    truck_id: req.body.truck_id,
    content: req.body.content,
    is_positive: req.body.is_positive
  })
  .then(function(){
    console.log(req.user, req.body.truck_id, req.body.content, req.body.is_positive)
    res.redirect('/truck/'+req.body.truck_id)
  })
})

module.exports=router;
