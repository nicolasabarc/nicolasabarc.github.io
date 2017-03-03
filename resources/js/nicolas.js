function giraElemento() {
    var a = $(".fa-cog");
    a.hover(function () {
        $(this).toggleClass("fa-spin")
    })
}

function desplazamientoMenu() {
    var a = $("a.page-scroll"),
        b = $("html, body");
    a.click(function (a) {
        var c = $(this);
        b.stop().animate({
            scrollTop: $(c.attr("href")).offset().top
        }, 1e3, "easeInOutExpo"), a.preventDefault()
    })
}

function escribeHeader() {
    var a = $("#head-title");
    a.typed({
        strings: ["Nicol\xe1s Abarca ^3500", " < Desarrollo Web />  ^3000", " Front & Back End; ^3000"],
        typeSpeed: 20,
        backSpeed: 5,
        loop: !0,
        startDelay: 5
    })
}

function revealOnScroll() {
    sr.reveal(".service", {
        delay: 100,
        distance: "90px",
        easing: "ease-in-out",
        scale: 1.1,
        mobile: !1
    }), sr.reveal(".techIcon", {
        easing: "cubic-bezier(.9,.65,.12,1)",
        mobile: !1,
        scale: 1.2,
        delay: 100
    }), sr.reveal("#mail", {
        reset: !0,
        distance: "200px",
        easing: "cubic-bezier(.9,.65,.12,1)",
        scale: 1.2,
        mobile: !1
    }), sr.reveal(".btn", {
        distance: "200px",
        easing: "cubic-bezier(.9,.65,.12,1)",
        mobile: !1
    })
}

function _render() {
    giraElemento(), desplazamientoMenu(), escribeHeader(), revealOnScroll()
}
$("body").scrollspy({
    target: ".navbar-fixed-top"
}), $(".navbar-collapse ul li a").click(function () {
    $(".navbar-toggle:visible").click()
}), $(document).ready(function () {
    _render()
});