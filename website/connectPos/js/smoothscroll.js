function smoothScroll(e, number) {
    $('html, body').animate({
        scrollTop: $(e).offset().top - number
    }, 800);
}