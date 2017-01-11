$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

/**/

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

/*******/

$(function() {

    $(".fa.fa-refresh").hover(function() {

        $(this).toggleClass('fa-spin');

    });

    $("#head-title").typed({
        strings: ["Nicolás Abarca ^1200", " < Diseño Web /> ^950", " { Programacíon } ^950", "Contáctame ! ^5000"],
        typeSpeed: 50,
        loop: true,
        startDelay: 15
    });


});
