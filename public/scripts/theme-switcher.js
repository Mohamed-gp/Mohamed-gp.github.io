(function () {
  try {
    const storageKey = "theme-preference";
    let theme;
    try {
      theme = localStorage.getItem(storageKey);
    } catch (e) {
      theme = "system";
    }

    theme = theme || "system";

    const setTheme = () => {
      const isDark =
        theme === "dark" ||
        (theme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    };

    // Set theme immediately to prevent flash
    setTheme();

    // Handle system preference changes
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener("change", setTheme);
      }
    }
  } catch (e) {
    console.error("Theme setup failed:", e);
  }
})();
