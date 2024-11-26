import React from 'react';
import { useTheme } from './ThemeContext';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  // Define styles for light and dark themes
  const appStyle = {
    backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
    color: theme === 'light' ? '#000000' : '#ffffff',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={appStyle}>
      <h1>{theme === 'light' ? 'Light Theme' : 'Dark Theme'}</h1>
      <button
        onClick={toggleTheme}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: theme === 'light' ? '#333333' : '#ffffff',
          color: theme === 'light' ? '#ffffff' : '#333333',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default App;
