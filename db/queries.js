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

  }
}
