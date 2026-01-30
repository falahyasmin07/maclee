const elements = document.querySelectorAll(".project-card");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.80;

  elements.forEach(el => {
    if (el.getBoundingClientRect().top < trigger) {
      el.classList.add("reveal-visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const menuLinks = document.querySelectorAll('nav a');

function setActiveMenu() {
  const scrollPos = window.scrollY + 100; // ajuster pour header

  menuLinks.forEach(link => {
    const section = document.querySelector(link.getAttribute('href'));
    if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', setActiveMenu);
setActiveMenu();

