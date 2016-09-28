"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');


// signup
router.get('/', function (req, res, next) {
  res.render('signup')
});

router.post('/', function (req, res, next) {
  if(req.body.userSignupPassword === req.body.userSignupPassword2){
    queries.getSingleUserByUsername(req.body.userSignupUsername).then(function(data){
      if(req.body.userSignupUsername===data[0].username){
        res.send('Error Please Use A Different Username');
      }
    }).catch(function(){
      next();
    })
  }
})

router.post('/', function (req, res, next) {
  queries.addNewUser(req.body.userSignupFirst, req.body.userSignupLast, req.body.userSignupUsername, req.body.userSignupPassword, req.body.userSignupEmail).then(function(data){
    res.redirect('/');
  })
});



module.exports = router;
