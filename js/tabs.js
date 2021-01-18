const content = document.querySelectorAll(".content");
const tabs = document.querySelectorAll("#tabsButton");
let currentPage = 0;

const displayTab = (content) => {
  content.forEach((content, index) => {
    content.classList.add("hidden");
    if (index === currentPage) {
      content.classList.remove("hidden");
    }
  });
};

displayTab(content);

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    currentPage = index;
    displayTab(content);
  });
});
