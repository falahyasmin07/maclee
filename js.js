const elements = document.querySelectorAll(".project-card");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("reveal-visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();
