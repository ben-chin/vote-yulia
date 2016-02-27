$(document).ready(function() {

    $('body').on('activate.bs.scrollspy', function (e) {
        if ($(e.target).data('topHack')) {
            $(this).removeClass('is-darkNavbar');
        } else {
            $(this).removeClass('is-darkNavbar').addClass('is-darkNavbar');
        }
    });

});