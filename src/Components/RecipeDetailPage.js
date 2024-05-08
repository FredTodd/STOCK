import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


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
`;

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;


const SectionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
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
  color: #283618;
`;

const MethodText = styled.p`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  color: #283618;
`;

const RoundedBox = styled.div`
  border-radius: 16px;
  background-color: #606C38;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
`;

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

const RecipeDetailPage = () => {
    const { recipeId } = useParams();
    const recipe = recipes.find(recipe => recipe.id === parseInt(recipeId));
  
    if (!recipe) {
      return <div>Recipe not found</div>;
    }
  
    return (
      <div>
        <StockTitle>
            <HomeLink to="/">STOCK</HomeLink>
        </StockTitle>
        <Container>
          <TitleContainer>
            <RecipeTitle>{recipe.title}</RecipeTitle>
          </TitleContainer>
          <SectionsContainer>
            <LeftSection>
              <RoundedBox>
                <SectionTitle>Ingredients</SectionTitle>
                <List>
                  {recipe.ingredients.map((ingredient, index) => (
                    <ListItem key={index}>{ingredient}</ListItem>
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