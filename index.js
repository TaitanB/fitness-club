const servicesItems = document.querySelectorAll(".services__item");

servicesItems.forEach(function (item) {
  const link = item.querySelector(".services__link");

  item.addEventListener("mouseenter", function () {
    link.classList.remove("visually-hidden");
  });

  item.addEventListener("mouseleave", function () {
    link.classList.add("visually-hidden");
  });
});
