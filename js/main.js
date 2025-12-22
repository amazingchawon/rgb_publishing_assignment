// 공통
import "./components/banner.js";
import "./common/scroll-top.js";

// 페이지별
if (document.body.classList.contains("page-main")) {
  import("./pages/main.js");
}

if (document.body.classList.contains("page-sub")) {
  import("./pages/sub.js");
}
