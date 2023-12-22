var printContainer = document.getElementById("print-container");
var resizeObserver = new ResizeObserver(function (entries) {
  for (var entry of entries) {
    if (entry.target.id === "print-container") {
      pageFitting();
    }
  }
});

// 페이지 로드 후 실행되는 코드
window.onload = () => {
  pageGenerate();
  pageFitting();
  resizeObserver.observe(printContainer);
};

// 페이지 프린트시 실행되는 코드
window.onbeforeprint = () => {
  let domArticle = document.getElementById("article");
  domArticle.style.zoom = "1.0";
};

// 페이지 프린트 후 실행되는 코드
window.onafterprint = () => {
  pageFitting();
};

// 페이지 뷰어 내부 컨텐츠를 프린트 컨테이너에 맞게 조정
function pageFitting() {
  let domPrintContainer = document.getElementById("print-container");
  let domArticle = document.getElementById("article");
  let domPage = document.querySelector(".print-page");

  let widthPrintContainer = getElementWidth(domPrintContainer);
  let widthPage = getElementWidth(domPage);

  let scale = widthPrintContainer / widthPage;
  domArticle.style.zoom = `${scale - 0.5}`;
}

// 목차 객체를 관리하는 클래스
class TocManager {
  constructor(ulElement) {
    this.tocListElement = ulElement || document.getElementById("toc-list");
    this.sectionNumbers = [0, 0, 0]; // h1, h2, h3
  }

  // 목차에 새 항목 추가 및 섹션 번호를 포함한 새 제목 반환
  newHeading(headingNode, headingLevel, pageNumber) {
    // 목차에는 h1, h2 만 표시
    // h3 는 새 제목만 반환하고 그 이하는 제목을 그대로 반환
    let section1Number = this.sectionNumbers[0];
    let section2Number = this.sectionNumbers[1];
    let section3Number = this.sectionNumbers[2];
    let headingText = headingNode.innerText;
    let newHeadingText = "";
    if (headingLevel === 1) {
      section1Number++;
      this.sectionNumbers = [section1Number, 0, 0];
      newHeadingText = `${section1Number}. ${headingText}`;
    } else if (headingLevel === 2) {
      section2Number++;
      this.sectionNumbers = [section1Number, section2Number, 0];
      newHeadingText = `${section1Number}.${section2Number}. ${headingText}`;
    } else if (headingLevel === 3) {
      section3Number++;
      this.sectionNumbers = [section1Number, section2Number, section3Number];
      newHeadingText = `${section1Number}.${section2Number}.${section3Number}. ${headingText}`;
      return newHeadingText;
    } else {
      return headingText;
    }
    let listItem = document.createElement("li");
    listItem.classList.add(`toc-level-${headingLevel}`);
    listItem.innerHTML = `
            <a href="#${headingNode.id}" class="toc-item-h${headingLevel}">
                <span class="title">${newHeadingText}</span>
                <span class="between-space"></span>
                <span class="page-number">${pageNumber}</span>
            </a>`;
    this.tocListElement.appendChild(listItem);
    return newHeadingText;
  }
}

// 내용을 페이지 단위로 나누어 프린트 컨테이너에 추가
function pageGenerate() {
  let domPageContent = document.querySelectorAll(".print-content");
  let domContentHeight = getElementHeight(domPageContent[0]);

  let rawContents = document.getElementById("print-raw-contents");
  let rawContentsNodes = Array.from(rawContents.childNodes);

  let tocListManager = new TocManager();

  let tocList = document.getElementById("toc-list");
  let currentPageContainer = createNewPage();
  let currentPageContent = currentPageContainer.querySelector(".print-content");
  let linkList = null;
  let pageNumber = 1;

  rawContentsNodes.forEach((node) => {
    // 노드 안에 하이퍼링크가 있는 경우 처리
    var hyperlinks = node.querySelectorAll ? node.querySelectorAll("a") : null;
    if (hyperlinks) {
      hyperlinks.forEach((link) => {
        if (!linkList) {
          linkList = document.createElement("ul");
          linkList.classList.add("print-link-list");
        }
        let linkText = link.innerText;
        let linkHref = link.getAttribute("href");
        let linkItem = document.createElement("li");
        linkItem.innerHTML = `<strong>${linkText}</strong>: ${linkHref}`;
        linkList.appendChild(linkItem);
      });
    }

    if (node.nodeName.startsWith("H") && node.nodeName.length === 2) {
      let headingLevel = parseInt(node.nodeName[1]);
      let newHeadingText = tocListManager.newHeading(
        node,
        headingLevel,
        pageNumber
      );
      node.innerText = newHeadingText;
    }

    currentPageContent.appendChild(node);
    if (linkList) {
      currentPageContent.appendChild(linkList);
    }

    // 새 페이지 생성
    if (
      getElementHeight(currentPageContent) >= domContentHeight ||
      node.nodeName === "H1"
    ) {
      if (linkList) linkList = null;
      currentPageContent.removeChild(node);
      currentPageContainer = createNewPage();
      currentPageContainer.querySelector(".print-page-number").innerText =
        pageNumber++;
      currentPageContent = currentPageContainer.querySelector(".print-content");
      currentPageContent.appendChild(node);
    }
  });
}
function getElementHeight(element) {
  var styles = window.getComputedStyle(element);
  var margin =
    parseFloat(styles["marginTop"]) + parseFloat(styles["marginBottom"]);
  return Math.ceil(element.offsetHeight + margin);
}
function getElementWidth(element) {
  var styles = window.getComputedStyle(element);
  var margin =
    parseFloat(styles["marginLeft"]) + parseFloat(styles["marginRight"]);
  return Math.ceil(element.offsetWidth + margin);
}
function createNewPage() {
  var newPage = document.createElement("div");
  newPage.classList.add("print-page");
  newPage.innerHTML =
    '<div class="print-content"></div><span class="print-page-number"></span>';
  document.getElementById("article").appendChild(newPage);
  return newPage;
}
