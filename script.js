document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const aside = document.querySelector("aside");
  const closeBtn = document.querySelector(".close-menu");

  toggle.addEventListener("click", () => {
    aside.classList.toggle("active");
  });

  closeBtn.addEventListener("click", () => {
    aside.classList.remove("active");
  });
});