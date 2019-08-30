/* SERVICES SECTION */
$(function () {
    new WOW().init();

});

/* WORK SECTION MAGNIFIC PLUGIN */
$(function () {
    $("#work").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

});

/* TEAM SECTION OWL CAROUSEL PLUGIN */
$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // 0-575.98 Etra small
            0: {
                items: 1
            },
            // small (576-767.98)
            576: {
                items: 2
            },
            // medium (768-991.98)
            768: {
                items: 3

            },
            //large (992-1199.98)
            992: {
                items: 3
            },
            // Etra large (1200 up)
            1200: {
                items: 3
            }
        }

    });

});
/* TESTIMONIALS SECTION OWL CAROUSEL PLUGIN */
$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });

});

/* STATS SECTION COUNTER UP PLUGIN */
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000

    });

});

/* CLIENTS SECTION OWL CAROUSEL PLUGIN */
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            // 0-575.98 Etra small
            0: {
                items: 1
            },
            // small (576-767.98)
            576: {
                items: 3
            },
            // medium (768-991.98)
            768: {
                items: 5

            },
            //large (992-1199.98)
            992: {
                items: 6
            },
            // Etra large (1200 up)
            1200: {
                items: 6
            }
        }
    });

});

/* NAVIGATION */
$(function () {

    $(window).scroll(function () {

        if ($(this).scrollTop() < 50) {
            $("nav").removeClass("fcc-nav-bg");
            $("#back-to-top").fadeOut();


        } else {
            $("nav").addClass("fcc-nav-bg");
            $("#back-to-top").fadeIn();

        }

    });

});

/* NAVIGATION SMOOTH SCROLL */
$(function () {

    $("a.smooth").click(function (event) {
        event.preventDefault();
        var section = $(this).attr("href");

        $('html,body').animate({

            scrollTop: $(section).offset().top - 64

        }, 1250, "easeInOutExpo");

    });

});

/* CLOSE MOBILE MENU ON click */

$(function () {

    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggler").click();

    });

});