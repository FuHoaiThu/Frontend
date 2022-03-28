$(document).ready(function () {
    createSlick()
    if ($(window).width() <= 992) {
        createSlick()
    }
})
$(window).on('resize', function () {
    createSlick()
});
function createSlick() {
    $('.slide-for-mobile').not('.slick-initialized').slick({
        infinite: true,
        speed: 0,
        autoplay: true,
        autoplaySpeed: 800,
        rows: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidePerRow: 4
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidePerRow: 2
                }
            }
        ]
    });
    $('.partner-slide').not('.slick-initialized').slick({
        infinite:true,
        speed: 0,
        autoplay: true,
        autoplaySpeed: 1500,
        rows: 4,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 3000,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidePerRow: 2
                }
            }
        ]
    })
    $('.home-slider').not('.slick-initialized').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    })
    $('.club21-slide__content').not('.slick-initialized').slick({
        infinite:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
    })
}

    