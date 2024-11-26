import React, { createContext, useState, useContext } from 'react';

// Create the Theme Context
const ThemeContext = createContext();

// Provider component to manage the theme state
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for easier use of ThemeContext
export const useTheme = () => useContext(ThemeContext);
