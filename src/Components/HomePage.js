import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

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
  background-color: #FEFAE0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  cursor: ${props => (props.clickable ? 'pointer' : 'default')}; /* Change cursor based on clickable state */
`;

const RightSide = styled(animated.div)`
  width: 30%; /* Adjust width to be visible from the start */
  background-color: #FEFAE0;
  overflow: hidden; /* Hide overflow to ensure proper animation */
  cursor: pointer;
`;

const Divider = styled(animated.div)`
  width: 4px;
  background-color: #000000;
  height: 100vh; /* Span the entire height of the viewport */
  position: absolute;
  top: 0;
`;

const Title = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem; /* Increase font size */
  margin: 20px 0; /* Reset margin */
  align-self: flex-start; /* Move title to top left */
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit color from parent */
`;

const RecipeLink = styled.a`
  display: flex;
  align-items: center; /* Center items vertically */
  font-family: 'Poppins', sans-serif;
  font-size: 18px;
  text-decoration: none;
  color: #000000;
  margin-bottom: 10px;
`;

const RecipeImage = styled.img`
  width: 180px; /* Set image width */
  height: 180px; /* Set image height */
  margin-right: 10px; /* Add spacing between image and title */
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Center items horizontally */
`;

const ClickArea = styled(animated.div)`
  flex: 1;
  width: 100%;
`;

const RecipesTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  writing-mode: vertical-rl; /* Set writing mode to vertical right-to-left */
  margin: 5px; /* Add margin for spacing */
`;

const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [leftSideClicked, setLeftSideClicked] = useState(false); // Track whether left side has been clicked
  const navigate = useNavigate(); // Initialize useNavigate hook

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

  const imageAnimation = useSpring({
    maxWidth: isLeftExpanded ? '90%' : '70%', // Adjust width based on expanded state
  });

  const handleClickLeft = () => {
    if (!leftSideClicked) {
      setIsLeftExpanded(!isLeftExpanded);
      setLeftSideClicked(true); // Set left side clicked to true after the first click
    }
  };

  const handleClickRight = () => {
    // Programmatically navigate to a new page when right side is clicked
    navigate('/newpage');
  };

  return (
    <Container>
      <Content>
        <LeftSide
          clickable={!leftSideClicked} // Make clickable only if left side is not clicked
          expanded={isLeftExpanded}
          style={leftSideAnimation}
          onClick={handleClickLeft}
        >
          <Title href="/">STOCK</Title>
          <ClickArea />
          <animated.img
            src="/dinner.png"
            alt="Dinner"
            style={{ ...imageAnimation, marginBottom: '30%' }}
          />
        </LeftSide>
        <Divider style={dividerAnimation} />
        <RightSide
          expanded={!isLeftExpanded}
          style={rightSideAnimation}
          onClick={handleClickRight}
        >
          <RecipesContainer>
            <RecipesTitle>RECIPES</RecipesTitle>
            {Array.from({ length: 4 }).map((_, index) => (
              <RecipeLink key={index} href={`/recipe${index + 1}`}>
                <RecipeImage
                  src={`/IMG_0518.JPG`}
                  alt={`Recipe ${index + 1}`}
                />
              </RecipeLink>
            ))}
          </RecipesContainer>
        </RightSide>
      </Content>
    </Container>
  );
};

export default HomePage;
