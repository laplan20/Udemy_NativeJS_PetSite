const accordion = (triggerSelector) => {
  const accHead = document.querySelectorAll(triggerSelector);

  accHead.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.classList.toggle("active-style");
      this.nextElementSibling.classList.toggle("active-content");

      accHead.forEach((item) => {
        item.nextElementSibling.style.maxHeight = 0;
        if (item != this) {
          item.classList.remove("active-style");
          item.nextElementSibling.classList.remove("active-content");
        }
      });

      if (this.classList.contains("active-style")) {
        this.nextElementSibling.style.maxHeight =
          this.nextElementSibling.scrollHeight + 80 + "px";
      }
      console.dir(this);
    });
  });
};

export default accordion;
