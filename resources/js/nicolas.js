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

        $(this).css('transform', 'scale(1.5)');

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
        strings: ["Nicolás Abarca ^2500", " < Diseño Web />  ^2000"],
        typeSpeed: 15,
        backSpeed: 5,
        loop: true,
        startDelay: 0
    });

    $contactmail.typed({
        strings: [" nicolasabarc @ gmail . com  ^3500"],
        typeSpeed: 10,      
        loop: true,
        startDelay: 0
    });

}

/*******-----> <------*******/

function _render() {

    giraElemento();
    escalaElemento();
    desplazamientoMenu();
    escribeHeader();
}

/*******-----> <------*******/

$(function() {

    _render();

});
