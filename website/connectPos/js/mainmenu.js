
//show main menu
$(document).ready(function () {
    $('.main-menu__toggle').click(function () {
        $('.main-header__content').toggleClass('show-menu');
    });

    $('.main-header__menu li ').click(function () {
        $(this).siblings().removeClass('action');
        $(this).toggleClass('action');
    });

})
//hide main menu
$(document).mouseup(function (e) {
    var value = $(".main-header__content");
    if (!$('.main-menu__toggle').is(e.target) && !value.is(e.target) && value.has(e.target).length == 0) {
        $('.main-header__content').removeClass('show-menu');
    }
})