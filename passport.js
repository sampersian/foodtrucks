"use strict"
var passport = require('passport');
var Local = require('passport-local').Strategy;
var query = require('./db/queries');
var bcrypt = require('bcrypt');


passport.use(new Local(
	function(username, password, done) {
		query.getSingleUserByUsername(username)
		.then(function(users) {
			let user;
			if (users.length === 0) {
				query.getSingleOwnerByUsername(username)
				.then((data) => {
					user = data[0];
				})
			} else {
				user = users[0];
			}
			console.log(user);
			if(bcrypt.compareSync(password, user.password)){

				done(null, user); // If the credentials are valid, the verify callback invokes done to supply Passport with the user that authenticated.

			} else {

				done(null, false); // If the credentials are not valid (for example, if the password is incorrect) We could add a flash message.

			}
		})
		.catch(function(err) {
			done(null, false);
		})

	}
));

passport.serializeUser(function(user, done) {
	console.log('a');
	done(null, user.username);
});

passport.deserializeUser(function(username, done) {
	console.log('b');
	query.getSingleUserByUsername(username)
	.then(function(data){
		console.log('c');
		let user = data[0].username;
		done(null, user);
	})
	.catch(function(err) {
		console.log('d');
		return next(err);
	})



});

module.exports = passport;
