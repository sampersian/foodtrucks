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

// Truck signup
router.get('/truck', function (req, res, next) {
  res.render('truckSignUp')
});

router.post('/truck/new', function (req, res, next) {
  console.log("Here!")
  console.log(req.user)
  var identOwner=0;
  queries.getOwnerByUsername('dunbarry')
  .then(function(owner){
    identOwner=owner.id;
    // console.log(identOwner)
  })
  queries.getAllTrucks().insert({
    //This owner id is just a place holder.
    owner_id: identOwner,
    truck_name: req.body.truck_name,
    image_url: req.body.image_url,
    genre: req.body.genre,
    description: req.body.description
  })
  .then(function(){
    console.log(identOwner, req.body.truck_name, req.body.image_url, req.body.genre, req.body.description)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateSunday,
    location: req.body.SundayLocation,
    open_time: req.body.SundayOpen,
    close_time: req.body.SundayClose,
  })
  .then(function(){
    console.log(req.body.dateSunday, req.body.SundayLocation, req.body.SundayOpen, req.body.SundayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateMonday,
    location: req.body.MondayLocation,
    open_time: req.body.MondayOpen,
    close_time: req.body.MondayClose,
  })
  .then(function(){
    console.log(req.body.dateMonday, req.body.MondayLocation, req.body.MondayOpen, req.body.MondayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateTuesday,
    location: req.body.TuesdayLocation,
    open_time: req.body.TuesdayOpen,
    close_time: req.body.TuesdayClose,
  })
  .then(function(){
    console.log(req.body.dateTuesday, req.body.TuesdayLocation, req.body.TuesdayOpen, req.body.TuesdayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateWednesday,
    location: req.body.WednesdayLocation,
    open_time: req.body.WednesdayOpen,
    close_time: req.body.WednesdayClose,
  })
  .then(function(){
    console.log(req.body.dateWednesday, req.body.WednesdayLocation, req.body.WednesdayOpen, req.body.WednesdayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateThursday,
    location: req.body.ThursdayLocation,
    open_time: req.body.ThursdayOpen,
    close_time: req.body.ThursdayClose,
  })
  .then(function(){
    console.log(req.body.dateThursday, req.body.ThursdayLocation, req.body.ThursdayOpen, req.body.ThursdayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateFriday,
    location: req.body.FridayLocation,
    open_time: req.body.FridayOpen,
    close_time: req.body.FridayClose,
  })
  .then(function(){
    console.log(req.body.dateFriday, req.body.FridayLocation, req.body.FridayOpen, req.body.FridayClose)
  })
  queries.getAllTruckSchedules().insert({
    truck_id: identOwner,
    date: req.body.dateSaturday,
    location: req.body.SaturdayLocation,
    open_time: req.body.SaturdayOpen,
    close_time: req.body.SaturdayClose,
  }, 'id')
  .then(function(result){
    console.log(req.body.dateSaturday, req.body.SaturdayLocation, req.body.SaturdayOpen, req.body.SaturdayClose)
    res.redirect('/truck/'+result[0]);
    // This redirect is just a placeholder.
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
