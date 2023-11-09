const desktopButton = document.querySelectorAll('.location-button');

desktopButton.forEach(button => {
  button.addEventListener('click', function() {
    window.location.href = 'location.html';
  });
});

const tabletButton = document.querySelectorAll('.location-button-tablet');

tabletButton.forEach(button => {
  button.addEventListener('click', function() {
    window.location.href = 'location.html';
  });
});

const mobileButton = document.querySelectorAll('.location-button-mobile');

mobileButton.forEach(button => {
  button.addEventListener('click', function() {
    window.location.href = 'location.html';
  });
});


const homeButton = document.querySelector('#home');
homeButton.addEventListener('click', function() {
  window.location.href = 'index.html';
});