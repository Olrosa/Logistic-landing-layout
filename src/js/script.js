document.addEventListener("DOMContentLoaded", function () {

    // FAQ
    const offers = document.querySelectorAll('.vacansy__item-offer');

    offers.forEach(offer => {
        offer.addEventListener('click', () => {
            // Найдем родительский элемент .vacansy__item
            const item = offer.closest('.vacansy__item');
            const content = item.querySelector('.vacansy__content');
            
            // Переключаем класс 'active' для .vacansy__content
            content.classList.toggle('active');
        });
    });

    // SLIDERS

    if (document.querySelector('.services__slider')) {
        const servicesSlider = new Swiper('.services__slider', {
            slidesPerView: 3,
            spaceBetween: 10,
            scrollbar: {
                el: '.services__scrollbar', // Уникальная полоса прокрутки
                draggable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, centeredSlides: true, initialSlide: 0 },
                576: { slidesPerView: 2, centeredSlides: false, initialSlide: 0 },
                1024: { slidesPerView: 3 },
            },
        });
    }

    // Инициализация второго слайдера, если элемент существует
    if (document.querySelector('.clients__slider')) {
        const clientsSlider = new Swiper('.clients__slider', {
            slidesPerView: 4,
            spaceBetween: 10,
            scrollbar: {
                el: '.clients__scrollbar', // Уникальная полоса прокрутки
                draggable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, centeredSlides: true, initialSlide: 0 },
                576: { slidesPerView: 2, centeredSlides: false, initialSlide: 0 },
                1024: { slidesPerView: 4 },
            },
        });
    }

});
