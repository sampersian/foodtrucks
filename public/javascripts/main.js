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

function loadTruckInfo(id) {
  // $.get('https://hipfoodtrucks.herokuapp.com/truck/info/'+id)
  $.get('http://localhost:3000/truck/info/'+id)
  .then((data) => {
    console.log(data)
    let truck_data = data.data;
    $('#selectTruckMessage').hide();
    $('.truckSnapshotName').text(truck_data.truck_name)
    $('.truckSnapshotOpen').text(makeTimeNeat(truck_data.open_time))
    $('.truckSnapshotClose').text(makeTimeNeat(truck_data.close_time))
    $('.truckSnapshotImage').attr('src', truck_data.image_url)
    $('.truckSnapshotLink').attr('href', "/truck/"+id)
    $('.truckSnapshot').css('display', 'flex');
  })
}

function makeTimeNeat(time) {
  let stringTime = String(time);
  let hours, minutes, ampm;
  if (stringTime.length === 3) {
    hours = stringTime.substring(0,1);
    minutes = stringTime.substring(1,3);
  } else {
    hours = stringTime.substring(0,2);
    minutes = stringTime.substring(2,4);
  }
  if (hours > 12) {
    ampm = "PM";
    hours -= 12;
  } else if (hours === 12) {
    ampm = "PM";
  } else {
    ampm = "AM"
  }
  let newStringTime = hours+":"+minutes+" "+ampm;
  return newStringTime;
}

function showAllLocations() {
  for (let l of locations) {
    addMarker(l)
  }
}

function truckSearch() {
  console.log("Searching");
  let method = $('#searchMethod').val();
  let term = $('#searchTerm').val();
  if (method === "near") {
    showAllLocationsWithin(Number(term));
  }
  else if (method === "truckName") {
    showTrucksWithName(term);
  }
  else if (method === "truckType") {
    showTrucksWithType(term);
  }
}

function showAllLocationsWithin(nMiles) {
  console.log("deleting markers");
  deleteMarkers();
  console.log("showing markers within "+nMiles+" miles");
  for (let l of locations) {
    if (haversineDistance(userSpot, l.location) < nMiles) {
      addMarker(l)
    }
  }
}

function showTrucksWithName() {
  let term = $("#searchTerm").val();
  console.log('searching for '+term);
}

function showTrucksWithType() {
  let term = $("#searchTerm").val();
  console.log('searching for '+term);
}

// Adds a marker to the map and push to the array.
function addMarker(l) {
  // var pinColor = "4286f4";
  // var pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
  //     new google.maps.Size(21, 34),
  //     new google.maps.Point(0,0),
  //     new google.maps.Point(10, 34));
  // var pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
  //     new google.maps.Size(40, 37),
  //     new google.maps.Point(0, 0),
  //     new google.maps.Point(12, 35));
  // var newMarker = new google.maps.Marker({
  //   map: map,
  //   position: l.location,
  //   title: l.truck_name,
  //   truck_id: l.truck_id,
  //   icon: pinImage,
  //   shadow: pinShadow
  // });
  var newMarker = new google.maps.Marker({
    map: map,
    position: l.location,
    title: l.truck_name,
    truck_id: l.truck_id
  });
  google.maps.event.addDomListener(newMarker, 'click', function() {
    loadTruckInfo(newMarker.truck_id)
  });
  markersArray.push(newMarker);
}

// Removes the overlays from the map, but keeps them in the array
function hideMarkers() {
  if (markersArray) {
    for (let i in markersArray) {
      markersArray[i].setMap(null);
    }
  }
}

// Shows any overlays currently in the array
function showMarkers() {
  if (markersArray) {
    for (let i in markersArray) {
      markersArray[i].setMap(map);
    }
  }
}

// Deletes all markers in the array by removing references to them
function deleteMarkers() {
  if (markersArray) {
    for (let i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
}
