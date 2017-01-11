var cbpAnimatedHeader = (function() {

    var docElem = document.documentElement,
        header = document.querySelector('.navbar-default'),
        didScroll = false,
        changeHeaderOn = 50;

    function init() {
        window.addEventListener('scroll', function(event) {
            if (!didScroll) {
                didScroll = true;
                setTimeout(scrollPage, 450);
            }
        }, false);
    }

    function scrollPage() {
        var sy = scrollY();
        if (sy >= changeHeaderOn) {
            classie.add(header, 'navbar-shrink');
        } else {
            classie.remove(header, 'navbar-shrink');
        }
        didScroll = false;
    }

    function scrollY() {
        return window.pageYOffset || docElem.scrollTop;
    }

    init();

})();
