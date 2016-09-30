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
  queries.getAllTrucks().insert({
    owner_id: 48,
    truck_name: req.body.truck_name,
    image_url: req.body.image_url,
    genre: req.body.genre,
    description: req.body.description
  })
  console.log(req.body.truck_name, req.body.image_url, req.body.genre, req.body.description)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Sunday,
    location: req.body.SundayLocation,
    open_time: req.body.SundayOpen,
    close_time: req.body.SundayClose,
  })
  console.log(req.body.Sunday, req.body.SundayLocation, req.body.SundayOpen, req.body.SundayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Monday,
    location: req.body.MondayLocation,
    open_time: req.body.MondayOpen,
    close_time: req.body.MondayClose,
  })
  console.log(req.body.Monday, req.body.MondayLocation, req.body.MondayOpen, req.body.MondayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Tuesday,
    location: req.body.TuesdayLocation,
    open_time: req.body.TuesdayOpen,
    close_time: req.body.TuesdayClose,
  })
  console.log(req.body.Tuesday, req.body.TuesdayLocation, req.body.TuesdayOpen, req.body.TuesdayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Wednesday,
    location: req.body.WednesdayLocation,
    open_time: req.body.WednesdayOpen,
    close_time: req.body.WednesdayClose,
  })
  console.log(req.body.Wednesday, req.body.WednesdayLocation, req.body.WednesdayOpen, req.body.WednesdayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Thursday,
    location: req.body.ThursdayLocation,
    open_time: req.body.ThursdayOpen,
    close_time: req.body.ThursdayClose,
  })
  console.log(req.body.Thursday, req.body.ThursdayLocation, req.body.ThursdayOpen, req.body.ThursdayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Friday,
    location: req.body.FridayLocation,
    open_time: req.body.FridayOpen,
    close_time: req.body.FridayClose,
  })
  console.log(req.body.Friday, req.body.FridayLocation, req.body.FridayOpen, req.body.FridayClose)
  queries.getAllTruckSchedules().insert({
    truck_id: 48,
    date: req.body.Saturday,
    location: req.body.SaturdayLocation,
    open_time: req.body.SaturdayOpen,
    close_time: req.body.SaturdayClose,
  })
  console.log(req.body.Saturday, req.body.SaturdayLocation, req.body.SaturdayOpen, req.body.SaturdayClose)
  res.render('/truck/1');
});



module.exports = router;
