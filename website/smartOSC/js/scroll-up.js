$('.scrollup').hide(); // xoa button scroll to top
$(document).ready(function () {
    $('.scrollup').click(function () { // scroll ve dau trang
        $('body,html').animate({
            scrollTop: 0
        }, 1000)
    });
    //khi scroll window
    $(window).scroll(function () {
        //scroll button
        if ($(this).scrollTop() >= 100) {        // If page is scrolled more than 100px
            $('.scrollup').fadeIn(200);    // Fade in the arrow
        } else {
            $('.scrollup').fadeOut(200);   // Else fade out the arrow
        }
    });
})
$(window).on('load', function () {
    $('body').removeClass('pre-loading');
    $('.pre-loading').delay(1000).fadeOut('fast');
})