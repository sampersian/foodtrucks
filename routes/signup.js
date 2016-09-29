"use strict"

var express = require('express');
var router = express.Router();
var queries = require('../db/queries');
//var swal = require('sweetalert');


// signup
router.get('/', function (req, res, next) {
  res.render('signup')
});

router.post('/', function (req, res, next) {
  if(req.body.userSignupPassword === req.body.userSignupPassword2){
    console.log('Password match');
    queries.getSingleUserByUsername(req.body.userSignupUsername).then(function(data){
      if(req.body.userSignupUsername===data[0].username){
        console.log('Username not avaliable for User Account Creation');
        res.redirect('/');
      }
    }).catch(function(){
      next();
    })
  }
  else {
    console.log('Passwords do not match for User Account Creation');
    res.redirect('/signup');
  }
})

router.post('/', function (req, res, next) {
  queries.addNewUser(req.body.userSignupFirst, req.body.userSignupLast, req.body.userSignupUsername, req.body.userSignupPassword, req.body.userSignupEmail,req.body.userPic).then(function(data){
    console.log('A new account was created successfully for User Account')
    res.redirect('/');
  })
});


router.post('/owner', function (req, res, next) {
  if(req.body.ownerSignupPassword === req.body.ownerSignupPassword2){
    console.log('Password match for Owner Account Creation');
    queries.getSingleOwnerByUsername(req.body.ownerSignupUsername).then(function(data){
      if(req.body.ownerSignupUsername===data[0].username){
        console.log('Password match for Owner Account Creation');
        res.send('Error Please Use A Different Username');
      }
    }).catch(function(){
      next(); // If then returns error
    })
  }
})

router.post('/owner', function (req, res, next) {
  console.log('A new account was created successfully for Owner Account')
  queries.addNewOwner(req.body.ownerSignupFirst, req.body.ownerSignupLast, req.body.ownerSignupUsername, req.body.ownerSignupPassword, req.body.ownerSignupEmail).then(function(data){
    res.redirect('/');
  })
});



module.exports = router;
