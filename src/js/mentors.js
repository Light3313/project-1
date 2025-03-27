window.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".mentors-swiper", {
        spaceBetween: 30,
        loop: true,
        autoplay: { delay: 10000 },
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});
