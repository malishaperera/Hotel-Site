// JavaScript to handle image animation on scroll
window.addEventListener('scroll', function() {
  var aboutHotelSection = document.getElementById('about-hotel');
  var staircase = document.getElementById('staircase');
  
  // Check if the about hotel section is in the viewport
  var isInViewport = function(element) {
      var rect = element.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      );
  };

  if (isInViewport(aboutHotelSection)) {
      // Add a class to the staircase div to trigger animation
      staircase.classList.add('active');
  } else {
      // Remove the class when it's out of view
      staircase.classList.remove('active');
  }
});
