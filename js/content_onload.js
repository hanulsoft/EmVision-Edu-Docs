"use strict";
function showImageAlt() {
    document.querySelectorAll("#article img").forEach(function (img) {
        var _a;
        if (!img.alt)
            return;
        let altText = img.alt;
        let altTextElement = document.createElement("div");
        let imgWarpper = document.createElement("div");
        imgWarpper.classList.add("img-wrapper");
        (_a = img.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(imgWarpper, img);
        imgWarpper.appendChild(img);
        imgWarpper.appendChild(altTextElement);
        altTextElement.classList.add("alt-text");
        altTextElement.innerHTML = altText;
    });
}
function handleInternalLinkClick(e) {
    var _a, _b;
    const target = e.target;
    if (target.tagName === "A" && target.getAttribute("href")) {
        (_a = document.getElementById("toc-sidebar")) === null || _a === void 0 ? void 0 : _a.classList.add("active");
        (_b = document.getElementById("main-contents")) === null || _b === void 0 ? void 0 : _b.classList.remove("open-navgation");
    }
}
function updateLinkEventListeners() {
    if (window.matchMedia("(max-width: 999px)").matches) {
        // 화면 너비가 999px 이하일 때 이벤트 리스너 추가
        document.addEventListener("click", handleInternalLinkClick);
    }
    else {
        // 그 외 경우 이벤트 리스너 제거
        document.removeEventListener("click", handleInternalLinkClick);
    }
}
document.addEventListener("DOMContentLoaded", function () {
    showImageAlt();
    window.addEventListener("resize", updateLinkEventListeners);
    updateLinkEventListeners();
});
