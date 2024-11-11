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

    const modal = document.querySelector('.custom-modal');
    const modalContent = document.querySelector('.custom-modal__content');
    const closeButton = document.querySelector('.custom-modal__close');
    const modalImage = document.querySelector('.custom-modal__image');
    const imageItems = document.querySelectorAll('.docs__item');

    // Function to open the modal and set the image source
    const openModal = (src) => {
        modalImage.src = src; // Set the image source
        modal.classList.add('custom-modal--active'); // Show the modal
        document.body.classList.add('no-scroll'); // Disable scrolling
    };

    // Function to close the modal
    const closeModal = () => {
        modal.classList.remove('custom-modal--active'); // Hide the modal
        modalImage.src = ''; // Clear the image source when closing
        document.body.classList.remove('no-scroll'); // Enable scrolling
    };

    // Add click event to each image item to open the modal
    imageItems.forEach((item) => {
        item.addEventListener('click', () => {
            openModal(item.src); // Pass the clicked image's src to openModal
        });
    });

    // Close modal on click outside the content
    modal.addEventListener('click', (e) => {
        if (!modalContent.contains(e.target)) {
            closeModal();
        }
    });

    // Close modal on click of the close button
    closeButton.addEventListener('click', closeModal);

    // Close modal on pressing ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
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
