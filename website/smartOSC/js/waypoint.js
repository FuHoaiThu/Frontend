//hompage way point
animation($('.home-intro__title'), "fadeInLeft")
animation($('.home-intro__description'), "fadeInLeft")
animation($('.text-link'), "fadeInLeft")
animation($('.case-study'), "fadeInLeft")
animation($('.home-revulution__caption img'), "fadeInLeft")
animation($('.home-revulution__caption .title-hero'), "fadeInLeft")
animation($('.home-revulution__caption p'), "fadeInLeft")
animation($('.home-revulution__caption button'), "fadeInLeft")
animation($('.hotel-mystay p'), "fadeInLeft")
animation($('.international-expansion p'), "fadeInLeft")
animation($('.home-info__caption-logo'), "fadeInLeft")
animation($('.international-expansion .title-hero'), "fadeInLeft")
//about us waypoint
animation($('.about-vision__item'), "fadeInLeft")
animation($('.about-core-value .title-hero'), "fadeInLeft")
animation($('.core-value__item'), "fadeInRight")
animation($('.about-achieve-animated'), "fadeInRight")
animation($('.about-achievement .title-hero'), "fadeInLeft")
animation($('.about-leader__intro'), "fadeInRight")
animation($('.leader-list-1'), "fadeInRight")
animation($('.leader-list-2'), "fadeInRight")
//career waypoint
animation($('.job-opportunities__left'), "fadeInLeft")
animation($('.career-life__content'), "fadeInLeft")
function animation(path, className, number) {
    var $path = path;
    $path.waypoint(function () {
        $path.addClass("" + className);
    },
        {
            offset: "70%"
        })
}
