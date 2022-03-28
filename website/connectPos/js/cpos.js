
$(document).ready(function () {
    var scrollLink = $('.scroll');
    //console.log(scrollLink);
    //if click nav call function to scroll
    $('.menu-parent__link').click(function () {
        var number = (this).getAttribute('data-number');
        switch (number) {
            case "1": smoothScroll('#product', 130);
                break;
            case "2": smoothScroll('#checkout', 50);
                break;
            case "3": smoothScroll('#payment', 50);
                break;
            case "4": smoothScroll('#customer', 50);
                break;
            case "5": smoothScroll('#report', 50);
                break;
            case "6": smoothScroll('#store', 50);
                break;
        }
        //change css if click 
        $(this).siblings().removeClass('change-page');
        $(this).addClass('change-page');
    })
    // show form
    $('.cpos-banner__button').click(function () {
        $(".refund-request").fadeIn(500);
        console.log(true);
    })
    //hide form
    $('.icon-close').click(function () {
        $(".refund-request").fadeOut("fast");
        //console.log("true");
    })
    $(window).scroll(function () {
        //console.log("true");
        var scrollPos = $(this).scrollTop();
        //console.log(scrollPos)
        scrollLink.each(function () {
            scrollPos = scrollPos + 50;
            var currentPos = $(this.hash).offset().top;
            if (currentPos < scrollPos) {
                $(this).parent().siblings().removeClass('change-page');
                $(this).parent().addClass('change-page');
            }

        })
    })
})
