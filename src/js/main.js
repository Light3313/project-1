document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.header__hamburger');
    const menu = document.querySelector('.header__menu');
  
    hamburger.addEventListener('click', () => {
      const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !isExpanded);
      menu.classList.toggle('is-active');
    });
  
    // Закриття меню при кліку поза ним
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
        menu.classList.remove('is-active');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    // Ваш код, який працює з DOM
    const phoneInput = document.getElementById('phone');
  
    phoneInput.addEventListener('input', function (e) {
      let value = e.target.value.replace(/\D/g, '');
      if (!value.startsWith('38')) {
        value = '38' + value;
      }
      let formattedValue = '+38';
  
      if (value.length > 2) {
        formattedValue += ' ' + value.slice(2, 5);
      }
      if (value.length > 5) {
        formattedValue += ' ' + value.slice(5, 7);
      }
      if (value.length > 7) {
        formattedValue += ' ' + value.slice(7, 9);
      }
      if (value.length > 9) {
        formattedValue += ' ' + value.slice(9, 12);
      }
  
      e.target.value = formattedValue;
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    new Swiper('.swiper', {
      slidesPerView: 3, // По замовчуванню 3 елементи
      spaceBetween: 20,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        850: {
          slidesPerView: 2, // При ширині <850px - 2 елементи
        },
        600: {
          slidesPerView: 1, // При ширині <600px - 1 елемент
        }
      }
    });
  });

