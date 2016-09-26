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
