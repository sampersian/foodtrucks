"use strict"

$(document).ready(function() {
  $("#search").submit(function(e) {
    e.preventDefault();
    truckSearch()
    console.log("working");
  });
});
