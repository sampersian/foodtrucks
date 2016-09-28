"use strict"

var knex = require('./knex');
var bcrypt = require('bcrypt');

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

  function GetScheduleDay(day) {
    return knex('schedule').join('truck', 'truck.id', 'schedule.truck_id').where('date', day);
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
	// Get join
	getScheduleTruck: function(id) {
		return knex('schedule').join('truck', 'truck.id', 'schedule.truck_id').where('truck_id', id);
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
	GetScheduleDay
}
