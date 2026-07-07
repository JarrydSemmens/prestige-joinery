(function () {
  const storageKey = "site-theme";
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === "light" || theme === "dark") {
      root.dataset.theme = theme;
    } else {
      delete root.dataset.theme;
    }

    const label = theme === "dark" ? "Dark" : theme === "light" ? "Light" : "Auto";
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = "Theme: " + label;
      button.setAttribute("aria-label", "Theme preference: " + label);
    });
  }

  function savedTheme() {
    try {
      return localStorage.getItem(storageKey) || "auto";
    } catch (_) {
      return "auto";
    }
  }

  function saveTheme(theme) {
    try {
      if (theme === "auto") {
        localStorage.removeItem(storageKey);
      } else {
        localStorage.setItem(storageKey, theme);
      }
    } catch (_) {
      return;
    }
  }

  applyTheme(savedTheme());

  window.addEventListener("DOMContentLoaded", () => {
    applyTheme(savedTheme());

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", () => {
        const current = savedTheme();
        const next = current === "auto" ? "light" : current === "light" ? "dark" : "auto";
        saveTheme(next);
        applyTheme(next);
      });
    });
  });
})();
