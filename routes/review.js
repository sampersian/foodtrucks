"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


router.post('/new/truck/:id', function (req,res,next) {
  var user = req.body.user_id;
  var truck = req.body.truck_id;
  var text = req.body.review;


  knex('review').insert({user_id: user, truck_id: truck, content: text})
  .then((data)=> {
    res.redirect('/truck/:id')
  })

})
