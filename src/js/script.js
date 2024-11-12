document.addEventListener("DOMContentLoaded", function () {

    // HEADER

     // Select the burger button, menu, and body
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__nav');
    const body = document.body; // Select the body element

    // Add a click event listener to the burger button
    burger.addEventListener('click', function () {
        // Toggle the 'active' class on the burger button and the menu
        burger.classList.toggle('active');
        menu.classList.toggle('active');

        // Toggle a class on the body to block or allow scrolling
        if (menu.classList.contains('active')) {
            body.classList.add('no-scroll');
        } else {
            body.classList.remove('no-scroll');
        }
    });

    // Close the menu when clicking outside
    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !burger.contains(event.target)) {
            burger.classList.remove('active');
            menu.classList.remove('active');
            body.classList.remove('no-scroll'); // Remove the no-scroll class
        }
    });


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

    // MODALS

    // Select elements related to the modal
    const modals = document.querySelectorAll('.custom-modal');
    const openModalButtons = document.querySelectorAll('.open-modal');
    const closeButtons = document.querySelectorAll('.custom-modal__close');

    const openModal = (modal, src = '') => {
        if (src) {
            const modalImage = modal.querySelector('.custom-modal__image');
            if (modalImage) {
                modalImage.src = src; // Устанавливаем источник изображения
            }
        }
        modal.classList.add('custom-modal--active');
        document.body.classList.add('no-scroll');
    };

    const closeModal = (modal) => {
        modal.classList.remove('custom-modal--active');
        document.body.classList.remove('no-scroll');

        // Очистим src изображения, чтобы не подгружалось старое при следующем открытии
        const modalImage = modal.querySelector('.custom-modal__image');
        if (modalImage) {
            modalImage.src = '';
        }
    };

    openModalButtons.forEach((button) => {
        const modalId = button.getAttribute('data-modal');
        const modal = document.querySelector(`.custom-modal[data-modal="${modalId}"]`);

        button.addEventListener('click', () => {
            if (modal) {
                const src = button.src || button.getAttribute('src'); // Получаем src изображения
                openModal(modal, src); // Передаем src в функцию открытия модалки
            }
        });
    });

    closeButtons.forEach((button) => {
        const modal = button.closest('.custom-modal');
        button.addEventListener('click', () => closeModal(modal));
    });

    modals.forEach((modal) => {
        const modalContent = modal.querySelector('.custom-modal__content');
        modal.addEventListener('click', (e) => {
            if (!modalContent.contains(e.target)) {
                closeModal(modal);
            }
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            modals.forEach((modal) => {
                if (modal.classList.contains('custom-modal--active')) {
                    closeModal(modal);
                }
            });
        }
    });


    // SLIDERS

    if (document.querySelector('.services__slider')) {
        const servicesSlider = new Swiper('.services__slider', {
            slidesPerView: 3,
            spaceBetween: 20,
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

    if (document.querySelector('.complex__slider')) {
        const complexSlider = new Swiper('.complex__slider', {
            slidesPerView: 3,
            spaceBetween: 20,
            scrollbar: {
                el: '.complex__scrollbar', // Уникальная полоса прокрутки
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
            spaceBetween: 20,
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

    // Инициализация второго слайдера, если элемент существует
    if (document.querySelector('.price__slider')) {
        const priceSlider = new Swiper('.price__slider', {
            slidesPerView: 2.5,
            spaceBetween: 20,
            scrollbar: {
                el: '.price__scrollbar', // Уникальная полоса прокрутки
                draggable: true,
            },
            mousewheel: {
                forceToAxis: true,
            },
            breakpoints: {
                320: { slidesPerView: 1, centeredSlides: true, initialSlide: 0 },
                576: { slidesPerView: 2, centeredSlides: false, initialSlide: 0 },
                1024: { slidesPerView: 2.5 },
            },
        });
    }

    // Инициализация второго слайдера, если элемент существует
    if (document.querySelector('.docs__slider')) {
        const docsSlider = new Swiper('.docs__slider', {
            slidesPerView: 4,
            spaceBetween: 20,
            scrollbar: {
                el: '.docs__scrollbar', // Уникальная полоса прокрутки
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

    // Инициализация второго слайдера, если элемент существует
    if (document.querySelector('.letters__slider')) {
        const lettersSlider = new Swiper('.letters__slider', {
            slidesPerView: 4,
            spaceBetween: 20,
            scrollbar: {
                el: '.letters__scrollbar', // Уникальная полоса прокрутки
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

    // Инициализация второго слайдера, если элемент существует
    if (document.querySelector('.live__slider')) {
        const liveSlider = new Swiper('.live__slider', {
            slidesPerView: 4,
            spaceBetween: 20,
            scrollbar: {
                el: '.live__scrollbar', // Уникальная полоса прокрутки
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
