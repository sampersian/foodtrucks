"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


router.post('/new/review', function (req,res,next) {
  return queries.getAllReviews().insert({
    user_id: req.body.user_id,
    truck_id: req.body.content,
    content: req.body.content
  })
  .then() {
    res.redirect('/truck/:id')
  })
})

// Insert and redirect
router.post('/authors/new/create', function(req, res){
  queries.getAllAuthors().insert({
    name: req.body.name,
    bio: req.body.bio,
    image_url: req.body.image_url
  },'id').then(function(results){
    res.redirect('/authors/'+results[0])
  })
})
