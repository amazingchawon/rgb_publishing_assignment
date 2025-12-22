const tabs = document.querySelectorAll(".business__tabs li");
const images = document.querySelectorAll(".business__images img");
const line = document.querySelector(".business__tab-line");
const imagesBox = document.querySelector(".business__images");

function moveLine(target) {
  const tabRect = target.getBoundingClientRect();
  const tabsRect = target.parentElement.getBoundingClientRect();
  const imagesRect = imagesBox.getBoundingClientRect();

  // 선의 시작: 이미지 영역 오른쪽 끝
  const overlap = -20;
  const lineLeft = imagesRect.right - tabsRect.left + overlap;

  // 선의 끝: 글씨 시작 - 20px
  const lineRight = tabRect.left - tabsRect.left - 20;

  line.style.left = `${lineLeft}px`;
  line.style.width = `${lineRight - lineLeft}px`;

  // 세로 중앙 정렬
  line.style.top = `${tabRect.top - tabsRect.top + tabRect.height / 2}px`;
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // active 초기화
    tabs.forEach((t) => t.classList.remove("is-active"));
    images.forEach((img) => img.classList.remove("is-active"));

    // active 설정
    tab.classList.add("is-active");
    images[index].classList.add("is-active");

    // 라인 이동
    moveLine(tab);
  });
});

// 초기 상태
const activeTab = document.querySelector(".business__tabs li.is-active");
if (activeTab) {
  moveLine(activeTab);
}
