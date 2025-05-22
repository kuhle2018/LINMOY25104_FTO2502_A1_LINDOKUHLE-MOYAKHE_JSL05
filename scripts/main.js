const themeToggleBtn = document.getElementById("theme-toggle");

themeToggleBtn.addEventListener("click", () => {
  document.documentElement.toggleAttribute("data-theme", "dark");
});
