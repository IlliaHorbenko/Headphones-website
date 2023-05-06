const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: -40,
    slidesPerView: 3,
    loop: true,
    autoHeight: true,
    watchOverflow: false,
    speed: 800,
    autoplay: true,
    observer: true,
    observerParents: true,
    observerSlideChildren: true,
    centeredSlides: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },
    mousewhell: {
        Sensitivity: 1,
    },

});

document.querySelector('.menu').addEventListener('click', function() {
    document.querySelector('.header__menu-list').classList.toggle('show-menu');
    document.querySelector('.menu').classList.toggle('menu-active');
    document.querySelectorAll('.menu__link-text').forEach(link => link.classList.toggle('show-text'));
    document.querySelectorAll('.menu__link-img').forEach(link => link.classList.toggle('menu__link-imgmobile'));
});

