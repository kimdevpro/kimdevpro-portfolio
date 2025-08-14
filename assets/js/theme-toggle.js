const icon = document.getElementById("theme-icon");

function updateIcon(theme) {
  icon.textContent = theme === "light" ? "☀️" : "🌙";
}

// Set initial theme
const storedTheme = localStorage.getItem("theme");
const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
const defaultTheme = storedTheme || (prefersLight ? "light" : "dark");
document.documentElement.setAttribute("data-theme", defaultTheme);
updateIcon(defaultTheme);

// Toggle theme
const toggleButton = document.getElementById("theme-toggle");
toggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateIcon(newTheme);
});

