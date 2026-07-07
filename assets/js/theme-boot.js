(function () {
  try {
    var theme = localStorage.getItem("site-theme");
    if (theme === "light" || theme === "dark") {
      document.documentElement.dataset.theme = theme;
    }
  } catch (_) {
    return;
  }
})();
