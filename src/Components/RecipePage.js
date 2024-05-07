import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import RecipeSearch from './RecipeSearch'; // Import the RecipeSearch component

const Container = styled.div`
  display: flex;
  overflow-x: hidden;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const FilterBar = styled.div`
  width: 20%;
  height: 75vh;
  background-color: #606C38;
  position: fixed;hmm
  top: 18%;
  bottom: 0;
  left: -1%;
  overflow-y: auto;
  border-radius: 16px;
  border: 3px solid #283618;
`;

const FilterTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: #FEFAE0;
  margin-bottom: 20px;
  text-align: center;
`;

const FilterOption = styled.div`
  margin-bottom: 10px;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer; /* Add cursor pointer for clickable effect */
  color: #FEFAE0;
  background-color: #606C38;
  border-radius: 13px; /* Make it a rounded square */
  transition: background-color 0.3s ease; /* Add transition effect */
  ${(props) => props.selected && `
    background-color: #283618; /* Darker green when selected */
  `}
  border: 3px solid #283618;
`;

const TodaysRecipe = styled(Link)`
  display: block; /* Make it a block element to occupy full width */
  margin-top: 40px;
  text-align: center;
  padding: 20px 40px;
  cursor: pointer;
  color: #FEFAE0;
  background-color: #606C38;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  border: 3px solid #283618;
  font-size: 1.5rem;
  text-decoration: none; /* Remove default underline */
`;

const RecipeOfTheDay = () => {
  return (
    <TodaysRecipe to="/"> {/* Link to the desired page */}
      Today's Recipe
    </TodaysRecipe>
  );
};

const Content = styled.div`
  padding: 20px;
  overflow-y: auto;
  margin-left: 20%;
  width: 80%;
  flex: 1;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin: 20px 20px 0 20px;
  text-decoration: none;
  color: #283618;
  position: absolute;
  z-index: 1;
  left: 1%;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const RecipeGallery = styled.div`
  display: grid;
  gap: 20px;
  padding-bottom: 20px;
  max-width: calc(100% - 100px);
  overflow-x: hidden;
  margin-left: 50px;
  margin-top: 12%;
  
  @media (min-width: 1px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (min-width: 1700px) {
    grid-template-columns: repeat(4, 1fr);
  }
  
  @media (min-width: 1900px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const RecipeThumbnail = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 10px);
  max-width: 70%;
  align-items: center;
  margin-bottom: 20px;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 16px;
`;

const RecipeTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  margin-top: 8px;
  color: #283618;
`;

const RecipePage = () => {
  const [selectedFilter, setSelectedFilter] = useState(null);

  const recipes = [
    { id: 1, image: "/IMG_0518.JPG", title: "Delicious Spaghetti Carbonara", category: "Veggie" },
    { id: 2, image: "/IMG_0518.JPG", title: "Mouthwatering Chicken Alfredo", category: "Vegan" },
    { id: 3, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Pescetarian" },
    { id: 4, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Pescetarian" },
    { id: 5, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Veggie" },
    { id: 6, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Vegan" },
    { id: 7, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Pescetarian" },
    { id: 8, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Veggie" },
    { id: 9, image: "/IMG_0518.JPG", title: "Savory Beef Stroganoff", category: "Vegan" },
    // Add more recipes here as needed
  ];

  const handleFilterClick = (category) => {
    setSelectedFilter(selectedFilter === category ? null : category); // Toggle selected filter
  };

  const filteredRecipes = selectedFilter ? recipes.filter(recipe => recipe.category === selectedFilter) : recipes;

  const convertToSlug = (text) => {
    return text.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
  };

  return (
    <Container>
      <FilterBar>
        <FilterTitle>Show me...</FilterTitle>
        <FilterOption selected={selectedFilter === 'Veggie'} onClick={() => handleFilterClick('Veggie')}>Veggie</FilterOption>
        <FilterOption selected={selectedFilter === 'Vegan'} onClick={() => handleFilterClick('Vegan')}>Vegan</FilterOption>
        <FilterOption selected={selectedFilter === 'Pescetarian'} onClick={() => handleFilterClick('Pescetarian')}>Pescetarian</FilterOption>
        <RecipeOfTheDay />
      </FilterBar>
      <Content>
        <HomeLink to="/"> {/* Link back to the home page */}
          <Title>STOCK</Title>
        </HomeLink>
        {/* Integrate RecipeSearch component here */}
        <RecipeSearch />
        <RecipeGallery>
          {/* Use map to generate thumbnails for each recipe */}
          {filteredRecipes.map(recipe => (
            <Link to={`/recipe/${convertToSlug(recipe.title)}`} key={recipe.id}>
              <RecipeThumbnail>
                <ThumbnailImage src={recipe.image} alt={recipe.title} />
                <RecipeTitle>{recipe.title}</RecipeTitle>
              </RecipeThumbnail>
            </Link>
          ))}
        </RecipeGallery>
      </Content>
    </Container>
  );
};

export default RecipePage;
