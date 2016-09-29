"use strict"

var express = require('express');
var router = express.Router();
var session = require('express-session');
var passport = require('../passport');
var flash = require('connect-flash');
var queries = require('../db/queries');

// Submit review
router.post('/new/review', function (req,res,next) {
  console.log("Here!")
  return queries.getAllReviews().insert({
    user_id: req.user,
    truck_id: req.body.truck_id,
    content: req.body.content,
    is_positive: req.body.is_positive
  }, 'id')
  .then(function(){
    res.redirect('/truck/:id')
  })
})
