const track = document.querySelector(".banner__track");
const slides = document.querySelectorAll(".banner__slide");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;

function moveToSlide(index) {
  track.style.transform = `translateX(-${index * 100}%)`;

  slides.forEach((slide) => slide.classList.remove("is-active"));
  indicators.forEach((dot) => dot.classList.remove("is-active"));

  slides[index].classList.add("is-active");
  indicators[index].classList.add("is-active");

  currentIndex = index;
}

indicators.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    moveToSlide(index);
  });
});
