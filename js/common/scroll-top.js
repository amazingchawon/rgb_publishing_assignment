document.addEventListener("DOMContentLoaded", function () {
  const backToTop = document.getElementById("backToTop");

  // 1. 스크롤 감지하여 버튼 표시/숨김
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 300) {
      // 300px 이상 스크롤되면 표시
      backToTop.classList.add("is-active");
    } else {
      backToTop.classList.remove("is-active");
    }
  });

  // 2. 버튼 클릭 시 최상단으로 부드럽게 이동
  backToTop.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
