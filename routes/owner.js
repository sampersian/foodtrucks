"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// /owner
router.get('/', function (req, res, next) {
  res.render('signup');
})

router.post('/signup', function (req, res, next) {
  if(req.body.ownerSignupPassword === req.body.ownerSignupPassword2){
    queries.getSingleOwnerByUsername(req.body.ownerSignupUsername).then(function(data){
      console.log('one');
      if(req.body.ownerSignupUsername===data[0].username){
        res.send('Error Please Use A Different Username');
      }
    }).catch(function(){
      next();
    })
  }
})

router.post('/signup', function (req, res, next) {
  queries.addNewOwner(req.body.ownerSignupFirst, req.body.ownerSignupLast, req.body.ownerSignupUsername, req.body.ownerSignupPassword, req.body.ownerSignupEmail).then(function(data){
    res.redirect('/');
  })
});


module.exports = router;
