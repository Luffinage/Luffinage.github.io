$(document).ready(function () {
  $(".carousel__inner").slick({
    // infinite: false,
    // slidesToShow: 2,
    // slidesToScroll: 2
    // dots: true,
    // speed: 500,
    // centerMode: true,
    // variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrow_left.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/arrow_right.png"></button>',
    responsive: [
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  });
  $("ul.catalog__tabs").on("click", "li:not(.catalog__tab_active)", function () {
    $(this).addClass("catalog__tab_active").siblings().removeClass("catalog__tab_active").closest("div.container").find("div.catalog__content").removeClass("catalog__content_active").eq($(this).index()).addClass("catalog__content_active");
  });
  function toggleSlede(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content").eq(i).toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  }
  toggleSlede(".catalog-item__link");
  toggleSlede(".catalog-item_back");

  $("[data-modul=consultation]").on("click", function () {
    // $(".overlay,#consultation").fadeIn("slow"); включить после починки рассылки
    $(".overlay,#sorry").fadeIn("slow");
  });
  $(".modal__close").on("click", function () {
    $(".overlay,#consultation,#order,#thanks,#sorry").fadeOut("slow");
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#order .modal__descr").text($(".catalog-item__subtitle").eq(i).text());
      $(".overlay,#order,#sorry").fadeIn();
    });
  });

  function validateForm(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },

      messages: {
        name: {
          required: "Пожалуйста, введите своё имя",
          minlength: jQuery.validator.format("Введите минимум {0} символа"),
        },
        phone: "Пожалуйста, введите свой номер телефона",
        email: {
          required: "Пожалуйста, введите свою почту",
          email: "Пожалуйста, введите правильный адрес почты",
        },
      },
    });
  }
  validateForm("#consultation form");
  validateForm("#order form");
  validateForm("#consultation-form");

  $("input[name=phone]").mask("+48-999-999-999", { placeholder: "000-000-000" });

  $("form").submit(function (e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    }
    // $.ajax({
    //   type: "POST",
    //   url: "mailer/smart.php",
    //   data: $(this).serialize(),
    // }).done(function () {
    //   $(this).find("input").val("");
    //   $("#consultation, #order").fadeOut();
    //   $(".overlay, #thanks").fadeIn("slow");
    //   $("form").trigger("reset");
    // }); включить после починки рассылки
    // css;
    // fonts;
    // icons;
    // img;
    // js;
    // index.html;
    $(this).find("input").val("");
    $("#consultation, #order").fadeOut();
    $(".overlay, #sorry").fadeIn("slow");
    $("form").trigger("reset"); // удалить после починки рассылки

    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1600) {
      $(".pageup").fadeIn();
    } else {
      $(".pageup").fadeOut();
    }
  });

  $("a[href=#up]").click(function () {
    const _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top + "px" });
    return false;
  });
  new WOW().init();
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
