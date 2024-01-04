$(document).ready(function () {
  $('.card-header').click(function () {
      $(this).find('i').toggleClass('fa-plus fa-minus');
      $(this).closest('.card').siblings().find('.card-header i').removeClass('fa-minus').addClass('fa-plus');
      $(this).closest('.card').siblings().find('.card-header').removeClass('active-faq');
      $(this).toggleClass('active-faq');
  });
});

$('.nav-item a[href^="#"]').click(function(e) {
  e.preventDefault();
  var target = this.hash;
  $('html, body').animate({
    scrollTop: $(target).offset().top -50
  },500);
});

function displayTime() {
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  // Add leading zeros if necessary
  hours = (hours < 10 ? "0" : "") + hours;
  minutes = (minutes < 10 ? "0" : "") + minutes;

  // Format the time
  var formattedTime = hours + ":" + minutes ;

  // Display the time on the webpage
  document.getElementById("current-time").innerHTML =   formattedTime;
}

// Update the time every second
setInterval(displayTime, 1000);

// Display the time when the page loads
displayTime();




//pop-from


// Get all buttons with the "openPopup" class
var openButtons = document.getElementsByClassName('openPopup');

// Add click event listeners to each button
for (var i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener('click', togglePopup);
}

// Function to toggle the popup's visibility
function togglePopup() {
  var overlay = document.getElementById('overlay');
  var popup = document.getElementById('popup');

  // Toggle the display of the overlay and popup
  overlay.style.display = overlay.style.display === 'block' ? 'none' : 'block';
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
};

var currentStep = 0;
showStep(currentStep);

function showStep(n) {
  var steps = document.getElementsByClassName("form-step");
  steps[n].style.display = "block";
  if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
  } else {
      document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (steps.length - 1)) {
      document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
      document.getElementById("nextBtn").innerHTML = "Next";
  }
}

function nextPrev(n) {
  var steps = document.getElementsByClassName("form-step");
  if (n == 1 && !validateForm(currentStep)) return false;
  steps[currentStep].style.display = "none";
  currentStep += n;
  if (currentStep >= steps.length) {
      document.getElementById("popupForm").submit();
      return false;
  }
  showStep(currentStep);
}

function validateForm(step) {
  var valid = true;
  var stepFields;

  // Define required fields for each step
  switch(step) {
      case 0: // Preferences step
          stepFields = ["talk_time", "talk_preference", "start_time", "communication_style"];
          break;
      case 1: // Contact details step
          stepFields = ["fullname", "phone", "email"];
          break;
      case 2: // Property details step
          stepFields = ["rent", "postcode"];
          break;
      default:
          stepFields = [];
  }

  // Validate each required field
  stepFields.forEach(function(field) {
      var inputElements = document.getElementsByName(field);
      var isCheckedOrFilled = Array.from(inputElements).some(input => (input.type === "checkbox" || input.type === "radio") ? input.checked : input.value.trim() !== "");
      if (!isCheckedOrFilled) {
          // Add invalid class or other error indication
          inputElements[0].className += " invalid"; // Update this based on your error display logic
          valid = false;
      }
  });

  return valid;
}



