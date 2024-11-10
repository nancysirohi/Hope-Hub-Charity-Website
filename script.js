function toggleMenu() {
    const navbar = document.getElementById('navbar');
    const ul = navbar.querySelector('ul');
    ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
  }
  document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  });
  