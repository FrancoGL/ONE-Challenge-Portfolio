let options = document.querySelectorAll(".item__link");

const hidden_when_click = () => {
  options.forEach((item) => {
    item.addEventListener("click", (e) => {
      menu_options.classList.remove("options__active");
    });
  });
};

hidden_when_click();
