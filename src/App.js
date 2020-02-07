import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import Toggle from './Toggle';

const lightTheme = {
  '--color-bg': '#ffffff',
  '--color-text': '#303846',
  '--color-primary': '#fc7e0f',
};

const darkTheme = {
  '--color-bg': '#303846',
  '--color-text': '#ffffff',
  '--color-primary': '#09d3ac',
};

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const currentTheme = darkMode ? darkTheme : lightTheme;
    Object.entries(currentTheme).forEach(entry => {
      document.documentElement.style.setProperty(entry[0], entry[1]);
    });
  }, [darkMode]);

  return (
    <div className="App">
      <header className="header">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <main className="main">
        <div className="wrapper">
          <h1>Dark Mode Toggle</h1>
          <Logo className="logo" />
          <p>
            Make the buttons and toggle in the header switch between light and
            dark mode.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
