
function initMap() {
  let lat, lon;
  navigator.geolocation.getCurrentPosition(function (position) {
      var geocoder = new google.maps.Geocoder();
      var latLng   = new google.maps.LatLng(
          position.coords.latitude, position.coords.longitude);
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log("Lat: "+typeof position.coords.latitude);
      console.log("Lon: "+typeof position.coords.longitude);
      var myLatLng = {lat: position.coords.latitude, lng: position.coords.longitude};

      // Create a map object and specify the DOM element for display.
      var map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        scrollwheel: false,
        zoom: 15
      });

      var marker = new google.maps.Marker({
        map: map,
        position: myLatLng,
        title: 'You are here!'
      });
  });
}
