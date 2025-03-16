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