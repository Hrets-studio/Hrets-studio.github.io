// Sticky Header
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('#mainNav').addClass('sticky');
    } else {
        $('#mainNav').removeClass('sticky');
    }
});

// Mobile Navigation
$('.nav-toggler').click(function() {
    if ($('#mainNav').hasClass('open-nav')) {
        $('#mainNav').removeClass('open-nav');
        $('.nav-toggler').removeClass('closed');
        $('.nav-toggler').addClass('open');
    } else {
        $('#mainNav').addClass('open-nav');
        $('.nav-toggler').removeClass('open');
        $('.nav-toggler').addClass('closed');
    }
});

$('#mainNav li a').click(function() {
    if ($('#mainNav').hasClass('open-nav')) {
        $('#mainNav').removeClass('open-nav');
        $('.nav-toggler').removeClass('closed');
        $('.nav-toggler').addClass('open');
    }
});

// navigation scroll
$('.js-scroll').click(function(event) {
    var id = $(this).attr("href");
    var offset = 80;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

/* WORK IN PROGRESS
   NAVIGATION ACTIVE STATE IN SECTION AREA
*/
var sections = $('section'), nav = $('nav'), nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      sections.removeClass('active');
 
      $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }
  });
});