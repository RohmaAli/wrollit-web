(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $window.on('load', function () {
        $('#loader-wrapper').fadeOut('slow', function () {
            $(this).remove();
        });
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    function navMenu() {

        // MAIN MENU TOGGLER ICON (MOBILE SITE ONLY)
        $('[data-toggle="navbarToggler"]').on('click', function () {
            $('.navbar').toggleClass('active');
            $('body').toggleClass('canvas-open');
        });
        // MAIN MENU TOGGLER ICON
        $('.navbar-toggler').on('click', function () {
            $('.navbar-toggler-icon').toggleClass('active');
        });

        // NAVBAR STICKY
        var $stickyNav = $(".navbar-sticky");

        $(window).on("scroll load", function () {
            var scroll = $(window).scrollTop();
            if (scroll >= 120) {
                $stickyNav.addClass("navbar-sticky-moved-up");
            } else {
                $stickyNav.removeClass("navbar-sticky-moved-up");
            }
            // apply transition
            if (scroll >= 250) {
                $stickyNav.addClass("navbar-sticky-transitioned");
            } else {
                $stickyNav.removeClass("navbar-sticky-transitioned");
            }
            // sticky on
            if (scroll >= 500) {
                $stickyNav.addClass("navbar-sticky-on");
            } else {
                $stickyNav.removeClass("navbar-sticky-on");
            }

        });
    }
    navMenu();

    // :: 3.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 4.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // SCROLLSPY ACTIVE CODE
    $('body').scrollspy({
        target: '#appo-header'
    });

    // :: 5.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 6.0 TESTIMONIALS ACTIVE CODE
    var testimonialSlider = $('.testimonials');
    testimonialSlider.owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        smartSpeed: 500,
        autoplay: true,
        loop: true,
        mouseDrag: true,
        touchDrag: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 1
            }
        }
    });

    testimonialSlider.on("translate.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").removeClass("animated zoomIn").css("opacity", "0");
    });
    testimonialSlider.on("translated.owl.carousel", function () {
        $(".single-testimonial img, .single-testimonial-thumb img, .client-rating").addClass("animated zoomIn").css("opacity", "1");
    });

    // :: 7.0 BRANDING SLIDER ACTIVE CODE
    $('.branding-slider.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        dots: false,
        smartSpeed: 2000,
        autoplay: true,
        autoplayTimeout: 4000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    });

    // :: 8.0 TEAM SLIDER ACTIVE CODE
    $('.team-slider.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: true,
        navText: ['<span class="fas fa-long-arrow-alt-left"></span>','<span class="fas fa-long-arrow-alt-right"></span>'],
        dots: false,
        responsive: {
            0: {
                dots: true,
                nav: false,
            },
            576: {
                dots: true,
                nav: false,
            },
            768: {
                dots: false,
                nav: true
            }
        }
    });

    // :: 9.0 PORTFOLIO ACTIVE CODE
    $('#container').imagesLoaded( function() {
      $('.portfolio').isotope({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.grid',
          percentPosition: true,
          masonry: {
            // use outer width of grid-sizer for columnWidth
            columnWidth: '.grid'
          }
        });
      // filter items on button click
        $('.portfolio-menu').on( 'click', 'button', function() {
          var filterValue = $(this).attr('data-filter');
          $('.portfolio').isotope({ filter: filterValue });
        });

        $('.portfolio-menu button').on( 'click', function() {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
        });
    });

    // :: 10.0 AOS ACTIVE CODE
    AOS.init();

    // :: 11.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 12.0 FANCYBOX IMAGE GALLERY
    $('[data-fancybox="images"]').fancybox({
        afterLoad: function (instance, current) {
            var pixelRatio = window.devicePixelRatio || 1;

            if (pixelRatio > 1.5) {
                current.width = current.width / pixelRatio;
                current.height = current.height / pixelRatio;
            }
        }
    });

    $('[data-fancybox]').fancybox({
        youtube: {
            controls: 0,
            showinfo: 0
        },
        vimeo: {
            color: 'f00'
        }
    });

}(jQuery));