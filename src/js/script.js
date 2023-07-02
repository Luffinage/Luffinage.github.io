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


// Найти все якорные ссылки на странице
const anchorLinks = document.querySelectorAll('a[href^="#"]');

// Добавить обработчик события клика для каждой якорной ссылки
anchorLinks.forEach(anchorLink => {
  anchorLink.addEventListener('click', smoothScroll);
});

// Функция для плавного прокручивания страницы к целевому элементу
function smoothScroll(event) {
  // Отменить стандартное действие ссылки
  event.preventDefault();

  // Получить идентификатор целевого элемента из атрибута href якорной ссылки
  const targetElementId = this.getAttribute('href').substring(1);

  // Найти целевой элемент на странице
  const targetElement = document.getElementById(targetElementId);

  // Плавно прокрутить страницу к целевому элементу
  targetElement.scrollIntoView({ behavior: 'smooth' });
}
