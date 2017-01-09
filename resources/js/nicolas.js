$(function () {
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('body').scrollspy({
    target: '.navbar-fixed-top'
})

$('.navbar-collapse ul li a').click(function () {
    $('.navbar-toggle:visible').click();
});


/*******/

$(function () {

    $(".fa.fa-refresh").hover(function () {

        $(this).toggleClass('fa-spin');

    });

});