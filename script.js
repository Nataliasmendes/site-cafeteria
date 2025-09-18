const swiperCafe = new Swiper(".swiper1", {
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper1-pagination",
  },

  navigation: {
    nextEl: ".swiper1-next",
    prevEl: ".swiper1-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 640px
    1000: {
      slidesPerView: 3,
      spaceBetween: 20,
    },

    1200: {
      slidesPerView: 4,
      spaceEvenly: 20,
    },
  },
});

const menuBotao = document.querySelector(".menu-hamburguer");
const menuNav = document.querySelector(".menu");

menuBotao.addEventListener("click", () => {
  menuNav.classList.toggle("ativo");
});

const swiperFlores = new Swiper(".swiper2", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  grabCursor: true,

  // If we need pagination
  pagination: {
    el: ".swiper2-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper2-next",
    prevEl: ".swiper2-prev",
  },

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    520: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    1020: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },
});
