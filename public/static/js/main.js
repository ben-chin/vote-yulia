$(document).ready(function () {

    // Smooth scroll
    $('a.has-smoothScroll').click(function () {
        $('html, body').animate({
            scrollTop: ($($.attr(this, 'href')).offset().top + 1),
        }, 700);
        return false;
    });

    // Scroll spy - toggle nav
    $('body').on('activate.bs.scrollspy', function (e) {
        if ($(e.target).data('topHack')) {
            $(this).removeClass('is-darkNavbar');
        } else {
            $(this).removeClass('is-darkNavbar').addClass('is-darkNavbar');
        }
    });

});