/**/

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*******/

function giraElemento() {

    var $cog = $('.fa-cog');

    $cog.hover(function() {
        $(this).toggleClass('fa-spin');
    });

}

function escalaElemento() {

    var $iconos = $(".fa-mobile,.fa-tablet,.fa-laptop");

    $iconos.hover(function agranda() {

        $(this).css('transform', 'scale(1.3)');

    }, function normaliza() {

        $(this).css('transform', 'scale(1)');

    });

}

function desplazamientoMenu() {

    var $pageScroll = $('a.page-scroll');
    var $html_body = $('html, body');

    $pageScroll.click(function(e) {

        var $anchor = $(this);

        $html_body.stop().animate({

            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');

        e.preventDefault();

    });
}

function escribeHeader() {

    var $headtitle = $("#head-title");
    var $contactmail = $("#contactmail");

    $headtitle.typed({
        strings: ["Nicolás Abarca ^3500", " < Front End />  ^3000", " { Back End }; ^3000"],
        typeSpeed: 10,
        backSpeed: 5,
        loop: true,
        startDelay: 0
    });
}

function revealOnScroll() {

    sr.reveal('.service', {
        reset: true,
        delay: 200,
        distance: '90px',
        easing: 'ease-in-out',
        scale: 1.1,
        mobile: false
    });

    sr.reveal('.techIcon', {
        reset: true,
        easing: 'cubic-bezier(.9,.65,.12,1)',
        mobile: false,
        scale: 1.2,
        delay: 100
    });

    sr.reveal('#mail', {
        reset: true,
        distance: '200px',
        easing: 'cubic-bezier(.9,.65,.12,1)',
        scale: 1.2,
        mobile: false
    });
}

function colorEnHover() {

    var $logos = $(".techIcon *");

    $logos.css('color', 'black');

    $logos.hover(function() {

        $(this).css('color', '');
        $(this).addClass('colored');

    }, function() {

        $(this).css('color', 'black');
        $(this).removeClass('colored');


    });
}

/*******-----> <------*******/

function _render() {

    giraElemento();
    escalaElemento();
    desplazamientoMenu();
    escribeHeader();
    revealOnScroll();
    colorEnHover();
}

/*******-----> <------*******/

$(document).ready(function() {

    _render();

});
