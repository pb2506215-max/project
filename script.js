const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click",() =>{
    // toggle menu visibility
    document.body.classList.toggle("show-mobile-menu");
});
// close the menu when close button is clicked
menuCloseButton.addEventListener("click",() => menuOpenButton.click());

//Initialize swiper
const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters
  loop: true,
  spaceBetween:25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   Responsive breakpoints
  breakpoints:{
    0:{
        slidePerView :1
    },
    768:{
        slidePerView :2
    },
    1024:{
        slidePerView :3
    }
  }
});