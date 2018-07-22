!function ($) {
  var menuButton = $('#menuButton');
  
  function toggleMenu() {
    menuButton.toggleClass('is-active');
    $('body').toggleClass('menu-open');
  }
  
  $(document).on('click', '#menuButton', function (e) {
    e.preventDefault();
    toggleMenu();
  });
  
}(window.jQuery);