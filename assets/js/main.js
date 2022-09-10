(function($) {
  "use strict";
  
  var nav = $('nav');
  var navHeight = nav.outerHeight();
  $('.navbar-toggler').on('click', function() {
      if(!$('#mainNav').hasClass('navbar-reduce')) {
          $('#mainNav').addClass('navbar-reduce');
      }
  });
  
  // START PRELOADED
  $(window).on('load', function () {
      $('.loader').delay(500).fadeOut('slow');
  });
  
  // Navbar Menu Reduce 
  $(window).trigger('scroll');
  $(window).on('scroll', function() {
      var pixels = 50;
      var top = 1200;
      if($(window).scrollTop() > pixels) {
          $('.navbar-expand-md').addClass('navbar-reduce');
          $('.navbar-expand-md').removeClass('navbar-trans');
      } else {
          $('.navbar-expand-md').addClass('navbar-trans');
          $('.navbar-expand-md').removeClass('navbar-reduce');
      }
      if($(window).scrollTop() > top) {
          $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
      } else {
          $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
      }
  });
  
  // Back to top button 
  $(window).on("scroll", function() {
      if($(this).scrollTop() > 100) {
          $('.back-to-top').fadeIn('slow');
      } else {
          $('.back-to-top').fadeOut('slow');
      }
  });
  $('.back-to-top').on("click", function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
  });
  
  //  Star ScrollTop
  $('.scrolltop-mf').on("click", function() {
      $('html, body').animate({
          scrollTop: 0
      }, 1000);
  });
  
  //  Star Scrolling nav
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function() {
      if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if(target.length) {
              $('html, body').animate({
                  scrollTop: (target.offset().top - navHeight + 30)
              }, 1000, "easeInOutExpo");
              return false;
          }
      }
  });
  
  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll').on("click", function() {
      $('.navbar-collapse').collapse('hide');
  });
  
  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
      target: '#mainNav',
      offset: navHeight
  });
  
  // HOME TYPED JS
  if($('.element').length) {
      $('.element').each(function() {
          $(this).typed({
              strings: [$(this).data('text1'), $(this).data('text2'), $(this).data('text3')],
              loop: $(this).data('loop') ? $(this).data('loop') : false,
              backDelay: $(this).data('backdelay') ? $(this).data('backdelay') : 2000,
              typeSpeed: 10,
          });
      });
  }
  
  //  MagnificPopup
  var magnifPopup = function() {
      $('.popup-img').magnificPopup({
          type: 'image',
          removalDelay: 300,
          mainClass: 'mfp-with-zoom',
          gallery: {
              enabled: true
          },
          zoom: {
              enabled: true, // By default it's false, so don't forget to enable it
              duration: 300, // duration of the effect, in milliseconds
              easing: 'ease-in-out', // CSS transition easing function
              // The "opener" function should return the element from which popup will be zoomed in
              // and to which popup will be scaled down
              // By defailt it looks for an image tag:
              opener: function(openerElement) {
                  // openerElement is the element on which popup was initialized, in this case its <a> tag
                  // you don't need to add "opener" option if this code matches your needs, it's defailt one.
                  return openerElement.is('img') ? openerElement : openerElement.find('img');
              }
          }
      });
  };
  // Call the functions
  magnifPopup();