import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const applyThemeToDOM = (theme: Theme) => {
  if (typeof document === 'undefined') return;
  const root = document.documentElement;
  const body = document.body;

  if (theme === 'dark') {
    root.classList.add('dark');
    if (body) body.classList.add('dark');
    root.setAttribute('data-theme', 'dark');
    root.style.colorScheme = 'dark';
  } else {
    root.classList.remove('dark');
    if (body) body.classList.remove('dark');
    root.setAttribute('data-theme', 'light');
    root.style.colorScheme = 'light';
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('mka_theme') as Theme | null;
        if (savedTheme === 'light' || savedTheme === 'dark') {
          applyThemeToDOM(savedTheme);
          return savedTheme;
        }
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
          applyThemeToDOM('dark');
          return 'dark';
        }
      } catch (err) {
        console.warn('Storage read error:', err);
      }
    }
    applyThemeToDOM('light');
    return 'light';
  });

  // Ensure DOM is in sync on mount and state changes
  useEffect(() => {
    applyThemeToDOM(theme);
    try {
      localStorage.setItem('mka_theme', theme);
    } catch (err) {
      console.warn('Storage write error:', err);
    }
  }, [theme]);

  // Sync across tabs if user changes theme in another tab
  useEffect(() => {
    const handleStorage = (e: StorageEvent) => {
      if (e.key === 'mka_theme' && (e.newValue === 'light' || e.newValue === 'dark')) {
        applyThemeToDOM(e.newValue);
        setThemeState(e.newValue);
      }
    };
    window.addEventListener('storage', handleStorage);
    return () => window.removeEventListener('storage', handleStorage);
  }, []);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === 'dark' ? 'light' : 'dark';
    applyThemeToDOM(nextTheme);
    try {
      localStorage.setItem('mka_theme', nextTheme);
    } catch (err) {
      console.warn('Storage write error:', err);
    }
    setThemeState(nextTheme);
  }, [theme]);

  const setTheme = useCallback((newTheme: Theme) => {
    applyThemeToDOM(newTheme);
    try {
      localStorage.setItem('mka_theme', newTheme);
    } catch (err) {
      console.warn('Storage write error:', err);
    }
    setThemeState(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
