const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  
  if (username === '' || password === '') {
    alert('Please enter a username and password');
    return;
  }
  
  // Send login request to server here...
});

$(document).ready(function() {
  // Attach an event listener to the phone number input field
  $('#phone').on('input', function() {
    // Remove any non-numeric characters from the input value
    var phone = $(this).val().replace(/\D/g, '');
    
    // If the length of the phone number is not 10 digits, disable the form submit button
    if (phone.length !== 10) {
      $('#submit-btn').attr('disabled', true);
    } else {
      $('#submit-btn').removeAttr('disabled');
    }
  });
});

function validateForm() {
  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") {
      alert("Please fill in all fields");
      return false;
    }
  }
  return true;
}