import React, { useState } from 'react';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';
import ServingCounter from './ServingCounter';

const StockTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin-bottom: 20px;
  text-decoration: none;
  color: #283618;
  left: 2%;
  position: relative;
`;

const HomeLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  margin: 0 20px;
  height: 100vh;
  position: relative; /* Required for absolute positioning */
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  height: 100vh;
`;

const RecipeTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #283618;
  text-decoration: underline;
`;

const LeftSection = styled.div`
  flex: 0.4; /* Adjust width as needed */
  margin-right: 40px; /* Adjust margin as needed */
`;

const RightSection = styled.div`
  flex: 0.6; /* Adjust width as needed */
  margin-left: 40px; /* Adjust margin as needed */
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #283618;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #283618;
`;

const List = styled.ul`
  list-style-type: none;
  color: #283618;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
  color: #FEFAE0;
  list-style-type: none; /* Remove default list bullet point */
  position: relative; /* Make position relative for absolute positioning of the circle */
  font-size: 1.2rem;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #283618; /* Add border */
  background-color: ${({ selected }) => (selected ? '#283618' : 'transparent')}; /* Toggle background color based on selection */
  position: absolute;
  left: -40px; /* Adjust the position of the circle */
  top: 50%; /* Center vertically */
  transform: translateY(-50%);
  cursor: pointer;
`;

const MethodText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  color: #FEFAE0;
`;

const RoundedBox = styled.div`
  border-radius: 16px;
  background-color: #606C38;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  border: 3px solid #283618;
  height: 60%;
`;

const AllRecipesButton = styled(Link)`
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: #283618;
  color: #FEFAE0;
  padding: 10px 20px;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
`;

const recipes = [
  {
    id: 1,
    title: 'Spaghetti Carbonara',
    ingredients: [
      { name: 'g Spaghetti', quantity: 200 },
      { name: 'Eggs', quantity: 2 },
      { name: 'Rashers of Bacon', quantity: 3 },
      { name: 'g Parmesan cheese', quantity: 50 },
    ],
    method: '1. Cook spaghetti according to package instructions. 2. In a separate bowl, whisk together eggs and grated Parmesan cheese...',
  },
  {
    id: 2,
    title: 'Chicken Alfredo',
    ingredients: [
      { name: 'Fettuccine', quantity: 200 },
      { name: 'Chicken breast', quantity: 150 },
      { name: 'Heavy cream', quantity: 200 },
      { name: 'Parmesan cheese', quantity: 50 },
    ],
    method: '1. Cook fettuccine according to package instructions. 2. In a skillet, cook chicken breast until fully cooked. 3. Add heavy cream and Parmesan cheese...',
  },
];

const RecipeDetailPage = () => {
    const [servings, setServings] = useState(1); // State for serving count
    const { recipeId } = useParams();
    const recipe = recipes.find((recipe) => recipe.id === parseInt(recipeId));
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
  
    // Function to adjust ingredient quantities based on servings
    const adjustedIngredients = recipe.ingredients.map((ingredient) => ({
      ...ingredient,
      quantity: ingredient.quantity * servings, // Multiply by serving count
    }));
  
    return (
      <div>
        {/* STOCK title and other styled components */}
        <StockTitle>
          <HomeLink to="/">STOCK</HomeLink>
        </StockTitle>
        <Container>
          <TitleContainer>
            <RecipeTitle>{recipe.title}</RecipeTitle>
          </TitleContainer>
          <AllRecipesButton to="/RecipePage">All Recipes</AllRecipesButton> {/* Button to navigate to all recipes */}
          <SectionsContainer>
            <LeftSection>
              <RoundedBox>
                <SectionTitle>Ingredients</SectionTitle>
                <ServingCounter servings={servings} setServings={setServings} /> {/* Add serving counter */}
                <List>
                  {adjustedIngredients.map((ingredient, index) => (
                    <ListItem key={index}>
                      <Circle data-selected="false" /> {/* Initialize the selected state */}
                      {ingredient.quantity} {ingredient.name}
                    </ListItem>
                  ))}
                </List>
              </RoundedBox>
            </LeftSection>
            <RightSection>
              <RoundedBox>
                <SectionTitle>Method</SectionTitle>
                <MethodText>{recipe.method}</MethodText>
              </RoundedBox>
            </RightSection>
          </SectionsContainer>
        </Container>
      </div>
    );
  };
  
  export default RecipeDetailPage;