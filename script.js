// script.js
document.addEventListener("DOMContentLoaded", () => {
  const scrollElements = document.querySelectorAll(".scroll-fade-in");

  const elementInView = (el, offset = 100) =>
    el.getBoundingClientRect().top <= window.innerHeight - offset;

  const displayScrollElement = (el) => {
    el.classList.add("visible");
  };

  const handleScrollAnimation = () => {
    scrollElements.forEach((el) => {
      if (elementInView(el)) {
        displayScrollElement(el);
      }
    });
  };

  window.addEventListener("scroll", () => {
    handleScrollAnimation();
  });

  handleScrollAnimation(); // run on load
});
