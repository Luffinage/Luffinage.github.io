window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger"),
    button = document.querySelector(".btn"),
    overlay = document.querySelector(".overlay"),
    sorry = document.querySelector(".sorry"),
    closeElem = document.querySelector(".close");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  button.addEventListener("click", () => {
    overlay.classList.add("active");
    sorry.classList.add("active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
  closeElem.addEventListener("click", () => {
    overlay.classList.remove("active");
    sorry.classList.remove("active");
  });
});
