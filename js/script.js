    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 8,
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
            1300: {
                slidesPerView: 8,
            },
        }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs
        },
    });
    var productCarouselTopWidth = $('.gallery-top').outerWidth();
    $('.gallery-top').css('height', productCarouselTopWidth);
    var productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
    $('.gallery-thumbs').css('height', productCarouselThumbsItemWith);
    var $easyzoom = $('.easyzoom').easyZoom();
	
AOS.init({
	easing: 'ease-out-back',
	duration: 1000
});
	