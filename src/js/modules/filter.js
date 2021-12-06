const filter = () => {
  const menu = document.querySelector(".portfolio-menu"),
    items = menu.querySelectorAll("li"),
    wrapper = document.querySelector(".portfolio-wrapper"),
    markAll = wrapper.querySelectorAll(".all"),
    no = document.querySelector(".portfolio-no");

  const typeFilter = (markType) => {
    markAll.forEach((item) => {
      item.style.display = "none";
      item.classList.remove("animated", "fadeIn");
    });

    no.style.display = "none";
    no.classList.remove("animated", "fadeIn");

    if (markType && markType.length > 0) {
      markType.forEach((item) => {
        item.style.display = "block";
        item.classList.add("animated", "fadeIn");
      });
    } else {
      no.style.display = "block";
      no.classList.add("animated", "fadeIn");
    }
  };

  const btnFilter = (selector) => {
    menu.querySelector(selector).addEventListener("click", () => {
      typeFilter(wrapper.querySelectorAll(selector));
    });
  };

  btnFilter(".all");
  btnFilter(".lovers");
  btnFilter(".chef");
  btnFilter(".guy");
  btnFilter(".girl");
  btnFilter(".grandmother");
  btnFilter(".granddad");

  menu.addEventListener("click", (e) => {
    const target = e.target;

    if (target && target.tagName == "LI") {
      items.forEach((btn) => btn.classList.remove("active"));
      target.classList.add("active");
    }
  });
};
export default filter;
