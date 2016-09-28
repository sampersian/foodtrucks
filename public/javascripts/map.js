"use strict"

let userLocation, map;
let markersArray = [];
function initMap() {
  let lat, lon;
  navigator.geolocation.getCurrentPosition(function (position) {
      var geocoder = new google.maps.Geocoder();
      var latLng   = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      // userlocation = {lat: lat, lng: lon};
      var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};
      userLocation = myLatLng;
      // Create a map object and specify the DOM element for display.
      map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 12
      });

      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'You are here!'
      });
      // $.get('https://hipfoodtrucks.herokuapp.com/today/locations')
      $.get('http://localhost:3000/today/locations')
      .then((data) => {
        for (d of data) {
          geoCodeAddress(d.location, d);
        }
      })
      .then(() => {
        showAllLocationsWithin(5);
      })
  })
}


function haversineDistance(coords1, coords2) {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  var lon1 = coords1.lng;
  var lat1 = coords1.lat;

  var lon2 = coords2.lng;
  var lat2 = coords2.lat;

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2)
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  let distance_between = d /= 1.60934
  return distance_between;
}
