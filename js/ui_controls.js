"use strict";
function NavigationToggle() {
    var _a, _b;
    (_a = document.getElementById("toc-sidebar")) === null || _a === void 0 ? void 0 : _a.classList.toggle("active");
    (_b = document.getElementById("main-contents")) === null || _b === void 0 ? void 0 : _b.classList.toggle("open-navgation");
}
