// smooth scroll
$('.nav__list a').on('click', function () {
    const scrollTo = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(scrollTo).offset().top
    }, 1000)
    if (window.innerWidth < 1024) {
        $('.nav__container').toggleClass('nav__container--active')
        $('.nav .fas').toggleClass('off')
    }
})
$('.home__top').on('click', function () {
    const scrollTo = "[data-section=" + $(this).attr('class') + "]";
    $('body, html').animate({
        scrollTop: $(scrollTo).offset().top
    }, 1000)
})

// scroller
$(document).on('scroll', () => {
    const windowHeight = $(window).height()
    const scrollValue = $(this).scrollTop()
    const $photo = $('.about__photo')
    const photoFromTop = $photo.offset().top
    const photoHeight = $photo.outerHeight()
    const $me = $('.about__me')
    const $icons = $('.skills__icons .fab')
    const iconsContainerFromTop = $icons.offset().top
    const iconsContainerHeight = $icons.outerHeight()
    const $topPage = $('.home__top i')
    if (scrollValue > photoFromTop + photoHeight - (windowHeight * 2)) {
        $photo.removeClass('about__photo-off')
        $me.removeClass('about__me-off')
        $topPage.removeClass('fas-off')
    }
    if (scrollValue > iconsContainerFromTop + iconsContainerHeight - windowHeight) {
        $icons.removeClass('skills__icons-off')
    }
    if (scrollValue < 100) {
        $('.about__photo').addClass('about__photo-off')
        $('.about__me').addClass('about__me-off')
        $('.skills__icons .fab').addClass('skills__icons-off')
        $('.home__top i').addClass('fas-off')
    }
})