const navLinks = document.querySelectorAll("[data-nav-link]");

navLinks.forEach((i) => {
  if (i.dataset.navLink === document.location.pathname) {
    i.classList.add("nav__link--accent");
  }
});
