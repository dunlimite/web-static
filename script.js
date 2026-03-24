const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const reserveForm = document.querySelector(".reserve-form");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (reserveForm) {
  reserveForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const button = reserveForm.querySelector("button");

    if (button) {
      const originalText = button.textContent;
      button.textContent = "Reservation Requested";
      button.disabled = true;

      window.setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        reserveForm.reset();
      }, 2200);
    }
  });
}
