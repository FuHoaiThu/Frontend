$(document).ready(function () {
    // $('.home-menu__sub-menu li').addClass('show-text');
    $('.home-nav__icon').click(function () {
        $('.global-menu').removeClass('show-menu');
        $('.home-logo__global').removeClass('show-menu');
        $('.home-nav').toggleClass('show-menu');
        $('.home-menu').toggleClass('show-menu');
    })
    $('.home-logo__global').click(function () {
        $('.home-menu').removeClass('show-menu');
        $('.home-nav').removeClass('show-menu');
        $('.global-menu').toggleClass('show-menu');
        $('.home-logo__global').toggleClass('show-menu');
    })
})
$(window).scroll(function () {
    // hide logo
    if ($(this).scrollTop() >= 20 && $(window).width() >= 992) {
        $('.home-logo__wrapper').hide();
    }
    else {
        $(".home-logo__wrapper").show();
    }
});
if($(window).scrollTop() > 20) {
    $('.home-logo__wrapper').hide();
}