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

    const header = document.querySelector(".site-header");
    const menuButton = document.querySelector("[data-menu-toggle]");
    const menu = document.querySelector("[data-nav-menu]");

    function setMenuOpen(open) {
      if (!header || !menuButton) {
        return;
      }

      header.classList.toggle("is-menu-open", open);
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      menuButton.setAttribute("aria-label", open ? "Close main menu" : "Open main menu");
    }

    if (header && menuButton && menu) {
      header.classList.add("is-nav-collapsible");

      menuButton.addEventListener("click", () => {
        setMenuOpen(!header.classList.contains("is-menu-open"));
      });

      menu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
          setMenuOpen(false);
        }
      });

      window.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          setMenuOpen(false);
        }
      });
    }

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
