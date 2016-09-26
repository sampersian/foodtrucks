let specified;
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

function geoCoder(address){
     var formattedAddress = address.split(' ').join('+');
  $.ajax({
    url:'https://maps.googleapis.com/maps/api/geocode/json?address='+formattedAddress+'&key=AIzaSyAMCg6786tQQUE9PoC4RNbsRswkyRqBbVg',
    error: function(err) {console.error(err)},
    method: 'GET',
    success: function(data){
      return (data.results[0].geometry.viewport.northeast);
    }
  })
}
