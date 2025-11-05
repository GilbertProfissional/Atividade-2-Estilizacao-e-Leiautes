document.addEventListener("DOMContentLoaded", function () {
  const btnToggle = document.getElementById("btnNavToggle");
  const navMenu = document.getElementById("primary-navigation");

  if (btnToggle && navMenu) {
    btnToggle.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      btnToggle.setAttribute("aria-expanded", isOpen);
    });
  }
});
