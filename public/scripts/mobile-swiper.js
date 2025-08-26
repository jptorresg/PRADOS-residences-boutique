const mobileSwiper = new Swiper('.mobile-gallery', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: '.mobile-gallery .swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.mobile-gallery .swiper-button-next',
        prevEl: '.mobile-gallery .swiper-button-prev',
    },
});