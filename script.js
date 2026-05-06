$(document).ready(function() {
  $('#dark-mode-toggle').click(function() {
      $('body').toggleClass('dark-mode');
      $('body').toggleClass('light-mode');

      // Change the icon based on the mode
      if ($('body').hasClass('dark-mode')) {
          $(this).html('<i class="fa-solid fa-sun"></i>'); // Icon for light mode
      } else {
          $(this).html('<i class="fa-solid fa-circle-half-stroke"></i>'); // Icon for dark mode
      }
  });

  // Set default mode
  $('body').addClass('light-mode');
});
