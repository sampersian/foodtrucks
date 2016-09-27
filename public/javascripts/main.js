"use strict"

let specified;
let locations = [];
$(document).ready(function() {
  if (specified) {
    showForm(specified);
  } else {
    showForm('user')
  }
})

function showForm(aForm) {
  $('.signupForm').hide()
  let formName = aForm+"SignupForm";
  $('.'+formName).show()
}
let d;
function geoCoder(address){
     var formattedAddress = address.split(' ').join('+');
  $.ajax({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+formattedAddress+'&key=AIzaSyAMCg6786tQQUE9PoC4RNbsRswkyRqBbVg',
    error: function(err) {console.error(err)},
    method: 'GET',
    success: function(data){
      locations.push(data.results[0].geometry.location)
      return data.results[0].geometry.location;
    }
  })
}
function geoCodeAddress(address, truckObject){
     var formattedAddress = address.split(' ').join('+');
  $.ajax({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+formattedAddress+'&key=AIzaSyAMCg6786tQQUE9PoC4RNbsRswkyRqBbVg',
    error: function(err) {console.error(err)},
    method: 'GET',
    success: function(data){
      truckObject.location = data.results[0].geometry.location
      locations.push(truckObject)
      return data.results[0].geometry.location;
    }
  })
}
