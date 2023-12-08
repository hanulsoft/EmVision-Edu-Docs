function toggleNav() {
  document.getElementById("toc-sidebar").classList.toggle("active");
  document.getElementById("main-contents").classList.toggle("open-sidebar");
}

function showImageAlt() {
  document.querySelectorAll("#article img").forEach(function (img) {
    if (!img.alt) return;
    let altText = img.alt;
    let altTextElement = document.createElement("div");
    altTextElement.classList.add("alt-text");
    altTextElement.innerHTML = altText;
    img.parentNode.insertBefore(altTextElement, img.nextSibling);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showImageAlt();
});
