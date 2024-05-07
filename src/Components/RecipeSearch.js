import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get('https://api.edamam.com/search', {
        params: {
          q: searchQuery,
          app_id: '07edbca0',
          app_key: '752f4ef6d376d62b49d2a64f9df75326',
          from: 0,
          to: 10, // Limiting to 10 results
        }
      });
      setSearchResults(response.data.hits);
    } catch (error) {
      console.error('Error searching recipes:', error);
    }
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search recipes by ingredients" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(recipe => (
          <li key={recipe.recipe.label}>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <p>Ingredients: {recipe.recipe.ingredientLines.join(', ')}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeSearch;
