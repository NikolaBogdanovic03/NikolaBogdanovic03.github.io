
if (window.innerWidth > 600) {
  window.location.href = "index.html"; // Redirect to mobile version
}
  var facebookButton = document.getElementById('facebookButton');

  facebookButton.addEventListener('click', function() {
    // Redirect to the Facebook page in the same window/tab
    window.location.href = 'https://www.facebook.com/nikola.bogdanovic.7906/';
  });

  
  var gitButton = document.getElementById('gitButton');

  gitButton.addEventListener('click', function() {
    // Redirect to the Facebook page in the same window/tab
    window.location.href = 'https://github.com/NikolaBogdanovic03';
  });

  var twitButton = document.getElementById('twitButton');

  twitButton.addEventListener('click', function() {
    // Redirect to the Facebook page in the same window/tab
    window.location.href = 'https://twitter.com/MrNightsky23';
  });

//   email button

var emailButton = document.getElementById('emailButton');

emailButton.addEventListener('click', function() {
  var recipientEmail = '03.nikola.bogdanovic@gmail.com';
  var subject = 'Hello';
  var body = 'Just wanted to say hi!';

  var gmailUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(recipientEmail) + '&su=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  
  window.open(gmailUrl);
});

//modal

var infoButton = document.getElementById('infoButton');
var infoModal = document.getElementById('infoModal');
var closeBtn = infoModal.getElementsByClassName('close')[0];

infoButton.addEventListener('click', function() {
  infoModal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  infoModal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  if (event.target === infoModal) {
    infoModal.style.display = 'none';
  }
});
// page title animation
var originalTitle = document.title; // Store the original page title

// Detect when the page becomes hidden
document.addEventListener('visibilitychange', function() {
  if (document.hidden) {
    // Perform your animation or change the page title
    document.title = "Come Back!";
  } else {
    // Reset the page title to the original value
    document.title = originalTitle;
  }
});