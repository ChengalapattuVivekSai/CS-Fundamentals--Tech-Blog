const ROOT_THEME_KEY = "ekb-root-theme";

const rootTheme = localStorage.getItem(ROOT_THEME_KEY) || "dark";
document.documentElement.setAttribute("data-theme", rootTheme);

const themeButton = document.getElementById("themeToggle");
if (themeButton) {
  themeButton.textContent = rootTheme === "dark" ? "Light Mode" : "Dark Mode";
  themeButton.addEventListener("click", () => {
    const next = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem(ROOT_THEME_KEY, next);
    themeButton.textContent = next === "dark" ? "Light Mode" : "Dark Mode";
  });
}
