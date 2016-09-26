var knex = require('./knex');

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
  getAllSchedules: function(){
    return Schedule();
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
}
