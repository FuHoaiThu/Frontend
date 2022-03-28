
$(document).ready(function () {
    if ($(window).width() <= 576) {
        createSlick()
    }
})
$(window).on('resize', function () {
    createSlick()
});
function createSlick() {
    $('.slide-for-mobile').not('.slick-initialized').slick({
        //dots: true,
        slidesToShow: 1,
        slideToScroll: 1,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    infinite: true
                }
            }
        ]
    });
    $('.key-technology-slide').not('.slick-initialized').slick({
        //dots: true,
        slidesToShow: 2,
        slideToScroll: 2,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    infinite: true
                }
            }
        ]
    })
}
