// Theme.js

import React, { createContext, useContext, useState } from 'react';

// Create a theme context
const ThemeContext = createContext();

// Create a custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a theme provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle dark mode function
  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  // Pass the theme context value to the provider
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
