import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const Content = styled.div`
  display: flex;
  position: relative; /* Ensure relative positioning for the divider */
  width: 200%; /* Make content twice as wide as the viewport */
`;

const LeftSide = styled(animated.div)`
  width: 70%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RightSide = styled(animated.div)`
  width: 30%; /* Adjust width to be visible from the start */
  background-color: #ffffff;
  overflow: hidden; /* Hide overflow to ensure proper animation */
`;

const Divider = styled(animated.div)`
  width: 4px;
  background-color: #000000;
  height: 100vh; /* Span the entire height of the viewport */
  position: absolute;
  top: 0;
`;

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  margin-bottom: 20px;
`;

const RecipeLink = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  margin-bottom: 20px;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ClickArea = styled(animated.div)`
  flex: 1;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);

  const leftSideAnimation = useSpring({
    width: isLeftExpanded ? '70%' : '100%',
  });

  const rightSideAnimation = useSpring({
    width: isLeftExpanded ? '30%' : '0%', /* Adjust initial width */
    transform: isLeftExpanded ? 'translateX(0%)' : 'translateX(100%)',
  });

  const dividerAnimation = useSpring({
    left: isLeftExpanded ? 'calc(70% - 2px)' : 'calc(100% - 2px)',
  });

  const handleClickLeft = () => {
    setIsLeftExpanded(!isLeftExpanded);
  };

  return (
    <Container>
      <Content>
        <LeftSide expanded={isLeftExpanded} style={leftSideAnimation}>
          <ClickArea onClick={handleClickLeft} />
          <Title>STOCK</Title>
          <RecipeImage src="/dinner.png" alt="Dinner" />
        </LeftSide>
        <Divider style={dividerAnimation} />
        <RightSide expanded={!isLeftExpanded} style={rightSideAnimation}>
          <RecipesContainer>
            {Array.from({ length: 4 }).map((_, index) => (
              <RecipeLink key={index} href={`/recipe${index + 1}`}>
                <RecipeImage src={`/recipe${index + 1}.jpg`} alt={`Recipe ${index + 1}`} />
              </RecipeLink>
            ))}
          </RecipesContainer>
        </RightSide>
      </Content>
    </Container>
  );
};

export default HomePage;
