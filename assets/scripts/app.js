$(function() {
  $(".button-collapse").sideNav();
  $("#header-text").lettering();

  $(".about-btn").click(function() {
    $('.button-collapse').sideNav('hide');
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top
    }, 500);
  });

  $(".projects-btn").click(function() {
    $('.button-collapse').sideNav('hide');
    $('html, body').animate({
        scrollTop: $("#featured-project").offset().top
    }, 600);
  });

  $(".experience-btn").click(function() {
    $('.button-collapse').sideNav('hide');
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 620);
  });

  $(".contact-btn").click(function() {
    $('.button-collapse').sideNav('hide');
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 700);
  });


  //update copyright year
  currentYear = new Date().getFullYear()
  $('#year').text(currentYear);

});
