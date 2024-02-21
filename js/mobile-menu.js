(() => {
  const menuBtnRef = document.querySelector("[data-menu-btn]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const wrapper = document.querySelector(".wrapper");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
      menuBtnRef.getAttribute("aria-expanded") === "true" || "false";

    menuBtnRef.classList.toggle("is-open");
    menuBtnRef.setAttribute("aria-expandet", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    wrapper.classList.toggle("menu__is-open");
  });
})();
