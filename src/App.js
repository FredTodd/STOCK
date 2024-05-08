import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes from react-router-dom
import HomePage from './Components/HomePage';
import RecipePage from './Components/RecipePage';
import RecipeDetailPage from './Components/RecipeDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Use element prop instead of component */}
        <Route path="/RecipePage" element={<RecipePage />} /> {/* Use element prop instead of component */}
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} /> {/* Use element prop instead of component */}
      </Routes>
    </Router>
  );
}

export default App;
