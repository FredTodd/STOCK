import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const LeftSide = styled(animated.div)`
  width: ${props => (props.expanded ? '70%' : '0%')};
  background-color: #ffffff; /* Adjust as needed */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2; /* Ensure left side is above the click area */
`;

const RightSide = styled(animated.div)`
  width: ${props => (props.expanded ? '30%' : '100%')};
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  height: 100vh; /* Span the entire height of the viewport */
  z-index: 1; /* Ensure right side is below the click area */
`;

const Divider = styled.div`
  width: 4px;
  background-color: #000000; /* Black color */
  position: absolute;
  top: 0;
  bottom: 0;
  left: calc(70% - 2px); /* Position the divider */
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
`;

const RecipeLink = styled(Link)`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #000000; /* Black color */
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  width: 200px;
  height: 150px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClickArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${props => props.width};
  cursor: pointer;
`;

const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [isRightExpanded, setIsRightExpanded] = useState(true);

  const leftSideAnimation = useSpring({
    width: isLeftExpanded ? '70%' : '0%',
  });

  const rightSideAnimation = useSpring({
    width: isRightExpanded ? '30%' : '100%',
  });

  const handleClickLeft = () => {
    setIsLeftExpanded(!isLeftExpanded);
    setIsRightExpanded(true);
  };

  const handleClickRight = () => {
    setIsRightExpanded(!isRightExpanded);
    setIsLeftExpanded(true);
  };

  return (
    <Container>
      <LeftSide expanded={isLeftExpanded} style={leftSideAnimation}>
        <Title>STOCK</Title>
        <img src="/dinner.png" alt="Dinner" style={{ maxWidth: '80%', maxHeight: '80%' }} />
      </LeftSide>
      <Divider />
      <RightSide expanded={isRightExpanded} style={rightSideAnimation}>
        <Title>RECIPES</Title>
        <RecipesContainer>
          <RecipeLink to="/recipe1">
            <RecipeImage src="/recipe1.jpg" alt="Recipe 1" />
          </RecipeLink>
          <RecipeLink to="/recipe2">
            <RecipeImage src="/recipe2.jpg" alt="Recipe 2" />
          </RecipeLink>
          <RecipeLink to="/recipe3">
            <RecipeImage src="/recipe3.jpg" alt="Recipe 3" />
          </RecipeLink>
          <RecipeLink to="/recipe4">
            <RecipeImage src="/recipe4.jpg" alt="Recipe 4" />
          </RecipeLink>
        </RecipesContainer>
      </RightSide>
      <ClickArea width="70%" onClick={handleClickLeft} />
      <ClickArea width="30%" onClick={handleClickRight} style={{ left: '70%' }} />
    </Container>
  );
};

export default HomePage;
