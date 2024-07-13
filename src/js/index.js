const screenWidth = window.screen.width;
const body = document.body;
const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger__menu");
const burgerMenuItem = document.querySelectorAll(
  ".burger__menu > .header__nav > ul > li"
);
if (screenWidth <= 1023 && burgerMenu) {
  burger.addEventListener("click", () => {
    burgerMenu.classList.toggle("hide");
    body.classList.toggle("no-scroll");
    burger.classList.toggle("opened");
  });
  burgerMenuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burgerMenu.classList.toggle("hide");
      body.classList.toggle("no-scroll");
      burger.classList.toggle("opened");
    });
  });
}
// Burger

const time = 3000;
const step = 1;
let alreadyExecuted = false;

function outNum(num, elem) {
  let l = document.querySelector("#" + elem);
  n = 0;
  let t = Math.round(time / (num / step));
  let interval = setInterval(() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  }, t);
}

function myFunction() {
  if (!alreadyExecuted) {
    // Здесь выполняются нужные действия
    outNum(100, "count_3");

    // Установка флага, что функция уже была выполнена
    alreadyExecuted = true;
  }
}
const myDiv = document.getElementById("scroll-target");
if (myDiv) {
  window.addEventListener("scroll", () => {
    const divPosition = myDiv.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    // Проверка, чтобы убедиться, что див видим
    if (divPosition < windowHeight) {
      myFunction(); // Вызываем функцию, когда мы доползли до нужного дива
    }
  });
}

$(document).ready(function () {
  $(".panel-heading").click(function () {
    $(this).toggleClass("in").next().slideToggle();
  });
});

const modal = document.getElementById("modal-form");
if (modal) {
  const modalBtn = document.querySelectorAll("#modal-btn");
  const modalBtnClose = document.getElementById("modal-close");
  modalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("open");
      body.classList.add("no-scroll");
    });
  });
  modalBtnClose.addEventListener("click", () => {
    modal.classList.remove("open");
    body.classList.remove("no-scroll");
  });
}

var swiper = new Swiper(".feedback-slider", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  navigation: { nextEl: ".feedback-next", prevEl: ".feedback-prev" },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 10 },
    500: { slidesPerView: 1.4, spaceBetween: 15 },
    768: { slidesPerView: 1.4, spaceBetween: 20 },
    1024: { slidesPerView: 2.7, spaceBetween: 20 },
  },
});
var swiper = new Swiper(".error-slider", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  navigation: { nextEl: ".error-next", prevEl: ".error-prev" },
  breakpoints: {
    320: { slidesPerView: 1.1, spaceBetween: 10 },
    500: { slidesPerView: 1.4, spaceBetween: 15 },
    768: { slidesPerView: 1.4, spaceBetween: 20 },
    1024: { slidesPerView: 2.2, spaceBetween: 20 },
  },
});

const priceSlide = document.querySelectorAll(
  ".price-slider > .swiper-wrapper > .swiper-slide"
);

if (priceSlide.length == 1) {
  const priceSlider = document.querySelector(".price-slider");
  const priceSlideBlock = document.querySelector(
    ".price-slider > .swiper-wrapper > .swiper-slide > .price_block__item"
  );
  priceSlider.classList.add("single-slider");
  priceSlideBlock.classList.add("single-slide-block");

  var swiper = new Swiper(".price-slider", {
    slidesPerView: 1,
    centeredSlides: true,
  });
} else {
  var swiper = new Swiper(".price-slider", {
    slidesPerView: 2.3,
    spaceBetween: 20,
    navigation: { nextEl: ".feedback-next", prevEl: ".feedback-prev" },
    breakpoints: {
      320: { slidesPerView: 1.1, spaceBetween: 10 },
      500: { slidesPerView: 1.4, spaceBetween: 15 },
      768: { slidesPerView: 1.4, spaceBetween: 20 },
      1024: { slidesPerView: 2, spaceBetween: 20 },
    },
  });
}
