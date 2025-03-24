window.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".reviews-swiper", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        speed: 1500,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
});

// autoplay: { delay: 10000 },
