import "./scss/style.scss";

import Swiper from "swiper/swiper-bundle.esm.js";
import WOW from "wow.js";

const thumbs = document.querySelector(".volum__thumbs");
const galleryTop = new Swiper(".volume__galery", {
  on: {
    slideChange: function ({ activeIndex }) {
      for (const el of thumbs.children) {
        el.classList.remove("active");
        if (parseInt(el.dataset.num) === activeIndex)
          el.classList.add("active");
      }
    },
  },
});

if (thumbs) {
  thumbs.addEventListener("click", function (e) {
    const target = e.target;
    const dl = target.closest("dl");
    if (dl) {
      for (const el of thumbs.children) {
        el.classList.remove("active");
      }
    }
    dl.classList.add("active");
    galleryTop.slideTo(+dl.dataset.num);
  });
}

const feedbackSlider = new Swiper(".feedback__swiper", {
  effect: "cards",
  cardsEffect: {
    slideShadows: false,
    rotate: false,
  },

  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: ".slide-next",
    prevEl: ".slide-prev",
  },
});

const orderBtns = document.querySelectorAll(".open-popap");

if (orderBtns) {
  orderBtns.forEach((b) => {
    b.addEventListener("click", (e) => {
      e.preventDefault();
      document.body.classList.add("open");
    });
  });
}

const closePopap = document.querySelector(".popap__close");

if (closePopap) {
  closePopap.addEventListener("click", () => {
    document.body.classList.remove("open");
  });
}

const wow = new WOW(/* {
  offset: 200,
} */);
wow.init();
