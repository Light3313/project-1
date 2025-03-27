window.addEventListener('DOMContentLoaded', () => {
    const initDynamicSlider = () => {
      const swiperEl = document.querySelector('.mySwiper');
      const slides = document.querySelectorAll('.swiper-slide');
  
      // Ініціалізувати слайдер, якщо слайдів >3 або екран <850px
      if (slides.length > 3 || window.innerWidth <= 850) {
        new Swiper('.mySwiper', {
          slidesPerView: '3',
          centeredSlides: false,
          spaceBetween: 30,
          loop: true, // Loop тільки якщо слайдів >3
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            850: { slidesPerView: 3 },
            600: { slidesPerView: 2 },
            320: { slidesPerView: 1 }
          }
        });
      }
    };
  
    // Викликати при завантаженні та ресайзі
    initDynamicSlider();
    window.addEventListener('resize', initDynamicSlider);
  });