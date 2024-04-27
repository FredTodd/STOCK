// App.js

import React from 'react';
import './App.css'; // Import the CSS file
import Header from './Header'; // Import the Header component
import { ThemeProvider } from './Theme'; // Import the ThemeProvider

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header /> {/* Render the Header component */}
      </div>
    </ThemeProvider>
  );
}

export default App;
