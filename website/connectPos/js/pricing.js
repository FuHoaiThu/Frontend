$(document).ready(function () {
    var count = 0;
    //console.log(classList.length);
    $('.check-box').click(function () {
        count = (count + 1) % 2;
        $('.pricing-table').toggleClass('pricing-action');
        $('.box-price__monney').each(function () {
            var number = (this).getAttribute('data-target');
            if (count === 0) $(this).html(number - 10);
            else $(this).html(number);
        })
    })
    $('.card').click(function () {
        $(this).siblings().removeClass('question-shadow');
        $(this).toggleClass('question-shadow');
    })
})
