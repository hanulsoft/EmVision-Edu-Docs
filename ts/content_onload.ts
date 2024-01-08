function showImageAlt() {
  document.querySelectorAll("#article img").forEach(function (img: Element) {
    if (!(img as HTMLImageElement).alt) return;
    let altText = (img as HTMLImageElement).alt;
    let altTextElement = document.createElement("div");
    let imgWarpper = document.createElement("div");
    imgWarpper.classList.add("img-wrapper");
    img.parentNode?.insertBefore(imgWarpper, img);
    imgWarpper.appendChild(img);
    imgWarpper.appendChild(altTextElement);
    altTextElement.classList.add("alt-text");
    altTextElement.innerHTML = altText;
  });
}

function handleInternalLinkClick(e: MouseEvent) {
  const target = e.target as HTMLElement;
  if (target.tagName === "A" && target.getAttribute("href")) {
    document.getElementById("toc-sidebar")?.classList.add("active");
    document.getElementById("main-contents")?.classList.remove("open-navgation");
  }
}

function updateLinkEventListeners() {
  if (window.matchMedia("(max-width: 999px)").matches) {
    // 화면 너비가 999px 이하일 때 이벤트 리스너 추가
    document.addEventListener("click", handleInternalLinkClick);
  } else {
    // 그 외 경우 이벤트 리스너 제거
    document.removeEventListener("click", handleInternalLinkClick);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showImageAlt();
  window.addEventListener("resize", updateLinkEventListeners);
  updateLinkEventListeners();
});
