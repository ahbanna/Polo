(function ($) {
    "use strict";


    // mean-menu (mobile)
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanMenuOpen: "<span></span><span></span><span></span>",
    });

    //    sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 5) {
            sticky.removeClass('sticky-menu');
        } else {
            $('#sticky-header').addClass('sticky-menu')
        }

    });


    //slider
    $('.slider-active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dots: true,
        autoplay: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    //slider yt bg
    jQuery(".yt-video").YTPlayer({
        showControls: false,
    });

    //zoom
    $(document).ready(function () {
        $('.slider-one').mkinfinite({
            maxZoom: 1.2,
            animationTime: 4000,
            imagesRatio: (960 / 720),
            isFixedBG: true,
            zoomIn: false,
            imagesList: new Array(
                'img/slider/slider01.jpg'
                //                'https://unsplash.it/1800/1200?image=643',
                //                'https://unsplash.it/1800/1200?image=543',
                //                'https://unsplash.it/1800/1200?image=443',
                //                'https://unsplash.it/1800/1200?image=343',
                //                'https://unsplash.it/1800/1200?image=243'
            )
        });
    });









    //wow
    new WOW().init();


    //pop-up video
    $('.popup-video').magnificPopup({
        type: 'iframe'
        // other options
    });

    //    hhhhhhhhhhhhhhhhhhh
    //    $('ul.nav li.dropdown').hover(function() {
    //  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    //}, function() {
    //  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    //});
    //    


    //    portfolio
    $('.portfolio-slider-active').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        dost: true,
        autoplay: true,

        autoplaySpeed: true,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    //counter
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //brand

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 30,
        dost: true,
        dotsEach: true,
        autoplay: true,
        nav: false,
        responsive: {
            0: {
                items: 3
            },
            576: {
                items: 4
            },
            1000: {
                items: 6
            }
        }
    })


    // scroll
    $('body').materialScrollTop();






})(jQuery);
