
$(document).ready(function () {
    // get data-number = value
    $('.menu-job__link li').click(function () {
        //console.log(true);
        $(this).siblings().removeClass('submenu-active__icon');
        $(this).addClass('submenu-active__icon');
        var value = (this).getAttribute('data-number');
        console.log(value);
        switch (value) {
            case "1": showSubMenu('.backoffice');
                break;
            case "2": showSubMenu('.techonology');
                break;
            case "3": showSubMenu('.sale-and-marketing');
                break;
            case "4": showSubMenu('.management');
                break;
        }
    })
    $('.submenu-icon__hidden').click(function(){
        $('.mobile-submenu').removeClass('submenu-open');
    })
})
function showSubMenu(e) {
    $('.mobile-submenu').addClass('submenu-open');
    $('.job-submenu').removeClass('submenu-active');
    $(e).children().addClass('submenu-active');
}