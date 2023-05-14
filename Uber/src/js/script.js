// window.onload = function() {
//   var btns = document.querySelectorAll('.bnt');
//   for(var i = 0; i < btns.length; i++) {
//       var btn = btns[i];
//       btn.onclick = function() {
//           alert('ho ho ho');
//       }
//   }
// }
window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuItem = document.querySelectorAll(".menu_item"),
    hamburger = document.querySelector(".hamburger"),
    buttons = document.querySelectorAll(".btn"),
    overlay = document.querySelector(".overlay"),
    sorry = document.querySelector(".sorry"),
    closeElem = document.querySelector(".close");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });

for(let i = 0; i < buttons.length; i++) {
            let button = buttons[i];
            button.onclick = function() {
                overlay.classList.add("active");
                sorry.classList.add("active");
            }
        };

  closeElem.addEventListener("click", () => {
    overlay.classList.remove("active");
    sorry.classList.remove("active");
  });
});
