const hamburger = document.querySelector(".hamburger"),
  menu = document.querySelector(".menu"),
  closeElem = document.querySelector(".close"),
  closeSorry = document.querySelector(".sorry__close"),
  overlay = document.querySelector(".overlay"),
  sorry = document.querySelector(".sorry"),
  submit = document.querySelector(".submit");

hamburger.addEventListener("click", () => {
  menu.classList.add("active");
  overlay.classList.add("active");
});
submit.addEventListener("click", () => {
  sorry.classList.add("active");
  overlay.classList.add("active");
});
closeElem.addEventListener("click", () => {
  menu.classList.remove("active");
  sorry.classList.remove("active");
  overlay.classList.remove("active");
});
closeSorry.addEventListener("click", () => {
  sorry.classList.remove("active");
  overlay.classList.remove("active");
});

const counters = document.querySelectorAll(".skills__scale-counter"),
  lines = document.querySelectorAll(".skills__scale div");

counters.forEach((item, i) => {
  lines[i].style.width = item.innerHTML;
});
