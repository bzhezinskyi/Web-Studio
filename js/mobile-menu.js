const menus = document.querySelectorAll("[data-menu]");

const menuBtn = document.querySelector("[data-menu-btn]");
const wrapper = document.querySelector(".wrapper");
// menuBtnRef.classList.toggle("is-open");

menus.forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// (() => {
//   menuBtnRef.addEventListener("click", () => {
//     const expanded =
//       menuBtnRef.getAttribute("aria-expanded") === "true" || "false";

//     menuBtnRef.classList.toggle("is-open");
//     menuBtnRef.setAttribute("aria-expandet", !expanded);

//     mobileMenuRef.classList.toggle("is-open");
//     document.body.classList.toggle("menu__is-open");
//     wrapper.classList.toggle("menu__is-open");
//   });
// })();
