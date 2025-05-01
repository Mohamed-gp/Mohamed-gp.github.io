(function() {
    try {
      const storageKey = 'theme-preference';
      let theme;
      try {
        theme = localStorage.getItem(storageKey);
      } catch (e) {
        theme = 'system';
      }
      
      theme = theme || 'system';
      
      function setThemeClass() {
        const isDark = theme === 'dark' || 
          (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);
        
        document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
      }
      
      setThemeClass();
      
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      if (theme === 'system') {
        if (mediaQuery.addEventListener) {
          mediaQuery.addEventListener('change', setThemeClass);
        }
      }
    } catch (e) {}
  })();