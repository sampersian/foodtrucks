"use strict"

var knex = require('./knex');
var bcrypt = require('bcrypt');


function today() {
  var d = new Date();
  var n = d.getDay();
  let days = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  }
  return days[n];
}


function hashPassword(password) {
	return bcrypt.hashSync(password, 10);
};

 function Owner(){
   return knex('owner');
 }

 function Truck(){
   return knex('truck');
 }

 function User(){
   return knex('user');
 }

 function Schedule(){
   return knex('schedule');
 }

 function Event(){
   return knex('event');
 }

 function Review(){
   return knex('review');
 }

 function getOneTruck(id) {
   return Truck().where('id', id);
 }

 function getOneTruckToday(id) {
	 return Truck().where('truck.id', id)
	 .join('schedule', 'truck.id', 'schedule.truck_id')
	 .select('truck.id as truck_id', 'owner_id', 'truck_name', 'image_url', 'genre', 'description', 'date', 'open_time', 'close_time')
	 .where('date', today());
 }


  function GetScheduleDay() {
    return knex('schedule')
		.join('truck', 'truck.id', 'schedule.truck_id')
		.where('date', today());
  }

module.exports = {
  // Get All
  getAllOwners: function(){
    return Owner();
  },
  getAllTrucks: function(){
    return Truck();
  },
  getAllUsers: function(){
    return User();
  },
  getAllSchedules: function(id){
    return Schedule().where('id', truck_id);
  },
  getAllEvents: function(){
    return Event();
  },
  getAllReviews: function(){
    return Review();
  },
  // Get Single
  getSingleOwner: function(id){
    return Owner().where('id', id);
  },
  getSingleTruck: function(id){
    return Truck().where('id', id)
  },
  getSingleUser: function(id){
    return User().where('id', id);
  },
  getSingleSchedule: function(id){
    return Schedule().where('id', id)
  },
  getSingleUser: function(id){
    return User().where('id', id);
  },
  getSingleSchedule: function(id){
    return Schedule().where('id', id)
  },
  getSingleEvent: function(id){
    return Event().where('id', id);
  },
  getSingleReview: function(id){
    return Review().where('id', id)
  },
  // Add new
  addNewUser: function(first_name, last_name, username, password, email){

    if (!username || !password) {
		    return false;
	  }

    return User().insert({
			first_name: first_name,
			last_name: last_name,
		  username: username,
			password: hashPassword(password),
      email: email
		});

  },
  addNewOwner: function(first_name, last_name, username, password, email){

    if (!username || !password) {
		    return false;
	  }

    return Owner().insert({
			first_name: first_name,
			last_name: last_name,
		  username: username,
			password: hashPassword(password),
      email: email
		});

  },
  getOneTruck,
	getOneTruckToday,
	GetScheduleDay
}
