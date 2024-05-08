import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Section = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 16px;
  background-color: #F0F0F0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const IngredientList = styled(Section)``;

const Method = styled(Section)``;

const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan cheese"],
    method: "1. Cook spaghetti according to package instructions. 2. In a separate bowl, whisk together eggs and grated Parmesan cheese..."
  },
  {
    id: 2,
    title: "Chicken Alfredo",
    ingredients: ["Fettuccine", "Chicken breast", "Heavy cream", "Parmesan cheese"],
    method: "1. Cook fettuccine according to package instructions. 2. In a skillet, cook chicken breast until fully cooked. 3. Add heavy cream and Parmesan cheese..."
  }
];

const RecipeDetailPage = ({ recipeId }) => {
  // Find the recipe with the matching id
  const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId));

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Container>
      <Title>{recipe.title}</Title>
      <IngredientList>
        <h2>Ingredients:</h2>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </IngredientList>
      <Method>
        <h2>Method:</h2>
        <p>{recipe.method}</p>
      </Method>
    </Container>
  );
};

export default RecipeDetailPage;
