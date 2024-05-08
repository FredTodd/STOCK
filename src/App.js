import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/HomePage';
import RecipePage from './Components/RecipePage';
import RecipeDetailPage from './Components/RecipeDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/RecipePage" element={<RecipePage />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} /> {/* Pass recipeId as a route parameter */}
      </Routes>
    </Router>
  );
}

export default App;
