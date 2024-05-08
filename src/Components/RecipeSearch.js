import React, { useState } from 'react';
import axios from 'axios';

const RecipeSearch = ({ onSearchResults }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
  
    const handleSearch = async () => {
      try {
        const response = await axios.get('https://api.edamam.com/search', {
          params: {
            q: searchQuery,
            app_id: '3429c5fb',
            app_key: 'b78431f18458c1ee925b3329d2f344e3',
            from: 0,
            to: 10, // Limiting to 10 results
          }
        });
        setSearchResults(response.data.hits);
        // Pass search results back to parent component
        onSearchResults(response.data.hits);
      } catch (error) {
        console.error('Error searching recipes:', error);
      }
    };
  
    return (
        <div style={{ position: 'relative', top: '20px', left: '8%' }}>
          <div style={{ marginBottom: '20px' }}>
            <input 
              type="text" 
              placeholder="Search recipes by ingredients" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)} 
              style={{ 
                padding: '10px', 
                fontSize: '1.2rem', 
                borderRadius: '8px', 
                border: '2px solid #606C38', 
                width: '300px' 
              }} 
            />
            <button 
              onClick={handleSearch} 
              style={{ 
                marginLeft: '10px', 
                padding: '10px 20px', 
                fontSize: '1.2rem', 
                borderRadius: '8px', 
                backgroundColor: '#606C38', 
                color: '#FEFAE0', 
                border: 'none', 
                cursor: 'pointer' 
              }}
            >
              Search
            </button>
          </div>
        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(4, minmax(200px, 200px))' }}>
          {searchResults.map(recipe => (
            <div key={recipe.recipe.label} style={{ textAlign: 'center', marginTop: '50%' }}>
              <img 
                src={recipe.recipe.image} 
                alt={recipe.recipe.label} 
                style={{ width: '100%', minWidth: '150px', height: '200px', objectFit: 'cover', borderRadius: '16px', marginBottom: '8px' }} 
              />
              <h3 style={{ fontFamily: 'Poppins', fontSize: '1rem', margin: '0', color: '#283618' }}>{recipe.recipe.label}</h3>
              <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" style={{ color: '#606C38', textDecoration: 'none' }}>View Recipe</a>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default RecipeSearch;
