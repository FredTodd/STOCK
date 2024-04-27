// Theme.js

import React, { createContext, useContext, useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';

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

  // Define the background color based on dark mode
  const backgroundColor = isDarkMode ? '#1A202C' : '#FEFAE0';

  // Pass the theme context value to the provider
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {/* Apply the background color directly to the root div */}
      <div style={{ backgroundColor, minHeight: '100vh' }}>
        <ChakraProvider>
          {children}
        </ChakraProvider>
      </div>
    </ThemeContext.Provider>
  );
};
