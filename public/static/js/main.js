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

        // Animate in within section
        var sectionSelector = $(e.target).children('a').attr('href');
        $(sectionSelector + ' ' + '.has-animatedEntrance')
            .each(function (i) {
                var delay = (0.15 * i) + 's';
                $(this)
                    .addClass('animateFadeIn')
                    .css({
                        '-webkit-transition-delay': delay,
                        '-moz-transition-delay': delay,
                        '-ms-transition-delay': delay,
                        '-o-transition-delay': delay,
                        'transition-delay': delay,
                    });
            });
    });

});