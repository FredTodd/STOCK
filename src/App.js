import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import HomePage from './Components/HomePage';
import RecipePage from './Components/RecipePage';

function App() {
  return (
    <Router>
      <Routes> {/* Use Routes wrapper */}
        <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/recipes" element={<RecipePage />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
