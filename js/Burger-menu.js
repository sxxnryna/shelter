document.addEventListener("DOMContentLoaded", () => {
  const burgerIcon = document.getElementById("burger-icon");
  const mobileNav = document.getElementById("mobile-nav");
  const overlay = document.getElementById("overlay");
  /*const body = document.body;*/
  const html = document.documentElement;

  // open/close menu
  function toggleMenu() {
    const isOpen = mobileNav.classList.contains("open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    mobileNav.classList.add("open");
    overlay.classList.add("active");
    burgerIcon.classList.add("open");
    html.classList.add("no-scroll"); // Block
  }

  function closeMenu() {
    mobileNav.classList.remove("open");
    overlay.classList.remove("active");
    burgerIcon.classList.remove("open");
    html.classList.remove("no-scroll"); // Allow
  }

  burgerIcon.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  const navLinks = mobileNav.querySelectorAll("a");
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  window.addEventListener("resize", () => {
    closeMenu(); // toZero
  });
});
