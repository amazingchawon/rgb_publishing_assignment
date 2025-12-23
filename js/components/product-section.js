const images = document.querySelectorAll(".product-image");
const infos = document.querySelectorAll(".product-info-item");
const thumbs = document.querySelectorAll(".thumb-item");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;
const total = images.length;

function updateUI(index) {
  images.forEach((img, i) => {
    img.classList.toggle("is-active", i === index);
  });

  infos.forEach((info, i) => {
    info.classList.toggle("is-active", i === index);
  });

  thumbs.forEach((thumb, i) => {
    thumb.classList.toggle("is-active", i === index);
  });
}

// 다음
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % total;
  updateUI(currentIndex);
});

// 이전
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + total) % total;
  updateUI(currentIndex);
});

// 썸네일 클릭
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    currentIndex = index;
    updateUI(currentIndex);
  });
});

// 초기 세팅
updateUI(currentIndex);
