// 공통
import "./components/banner.js";
import "./components/business-section.js";
import "./components/product-section.js";
import "./common/scroll-top.js";

// 페이지별
if (document.body.classList.contains("page-main")) {
  import("./pages/main.js");
}

if (document.body.classList.contains("page-sub")) {
  import("./pages/sub.js");
}

function loadComponent(id, path) {
  fetch(path)
    .then((res) => res.text())
    .then((html) => {
      document.getElementById(id).innerHTML = html;
    });
}

loadComponent("header", "components/header.html");
loadComponent("footer", "components/footer.html");
