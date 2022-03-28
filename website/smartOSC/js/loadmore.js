
$(document).ready(function () {
    loadmore('.artical-item', 3)
    loadmore('.event-partner .event-item__content', 3)
})
function loadmore(path, number) {
    $(path).slice(0, number).show();
    $('.load-more__button').click(function (e) {
        console.log(path);
        e.preventDefault();
        path = path + ':hidden';
        $(path).slice(0, 3).slideDown();

    })
    if ($(path).length === 0) {
        $(this).hide(); // xoa button load more
    }
}