function toggleNav() {
  document.getElementById("toc-sidebar").classList.toggle("active");
  document.getElementById("main-contents").classList.toggle("open-sidebar");
}

function showImageAlt() {
  document.querySelectorAll("#article img").forEach(function (img) {
    if (!img.alt) return;
    let altText = img.alt;
    let altTextElement = document.createElement("div");
    let imgWarpper = document.createElement("div");
    imgWarpper.classList.add("img-wrapper");
    img.parentNode.insertBefore(imgWarpper, img);
    imgWarpper.appendChild(img);
    imgWarpper.appendChild(altTextElement);
    altTextElement.classList.add("alt-text");
    altTextElement.innerHTML = altText;
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showImageAlt();
});
