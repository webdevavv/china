const screenWidth = window.screen.width;
if (screenWidth <= 1023) {
  const body = document.body;
  const burger = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger__menu");
  const burgerMenuItem = document.querySelectorAll(
    ".burger__menu > .header__nav > ul > li"
  );
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

const time = 2000;
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

window.addEventListener("scroll", () => {
  const myDiv = document.getElementById("scroll-target");
  const divPosition = myDiv.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  // Проверка, чтобы убедиться, что див видим
  if (divPosition < windowHeight) {
    myFunction(); // Вызываем функцию, когда мы доползли до нужного дива
  }
});

$(document).ready(function () {
  $(".panel-heading").click(function () {
    $(this).toggleClass("in").next().slideToggle();
  });
});

var swiper = new Swiper(".feedback-slider", {
  slidesPerView: 2.3,
  spaceBetween: 20,
  navigation: { nextEl: ".feedback-next", prevEl: ".feedback-prev" },
  breakpoints: {
    320: { slidesPerView: 1, spaceBetween: 10 },
    500: { slidesPerView: 1, spaceBetween: 15 },
    768: { slidesPerView: 1.4, spaceBetween: 20 },
    1024: { slidesPerView: 2.3, spaceBetween: 20 },
  },
});
