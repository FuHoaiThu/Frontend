$(document).ready(function () {
    $('.catalog-item').addClass('catalog-active-detail');
    $('.catalog-menu__link li').click(function () {
        var value = (this).getAttribute('data-number');
        $(this).siblings().removeClass('catalog-active');
        $(this).addClass('catalog-active');
        eventDetail(value)
    })
})
function eventDetail(e) {
    switch (e) {
        case "0": $('.catalog-item').addClass('catalog-active-detail');
            break;
        case "1": showEventDetail('.event-upcoming');
            break;
        case "2": showEventDetail('.event-recent');
            break;
        case "3": showEventDetail('.event-partner');
            break;
    }
}
function showEventDetail(e) {
    $('.catalog-item').removeClass('catalog-active-detail');
    $(e).addClass('catalog-active-detail');
}
