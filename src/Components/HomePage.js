import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow-x: hidden;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%; /* Adjusted to 100% */
`;

const LeftSide = styled(animated.div)`
  width: 70%;
  background-color: #FEFAE0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  cursor: ${props => (props.clickable ? 'pointer' : 'default')};
`;

const RightSide = styled(animated.div)`
  width: 30%;
  background-color: #FEFAE0;
  overflow: hidden;
  cursor: pointer;
  display: flex; /* Ensure flex layout */
  flex-direction: column; /* Arrange children vertically */
  justify-content: flex-start; /* Align items to the start vertically */
`;

const Divider = styled(animated.div)`
  width: 4px;
  background-color: #000000;
  height: 100vh;
  position: absolute;
  top: 0;
`;

const Title = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  margin: 20px 20px 0 20px; /* Adjusted margin */
  text-decoration: none;
  color: inherit;
`;

const RecipeLink = styled.div`
  display: flex;
  align-items: center; /* Center items vertically */
  justify-content: center; /* Center items horizontally */
  margin-bottom: 20px; /* Increased margin */
  cursor: pointer; /* Change cursor to pointer */
`;

const RecipeImage = styled.img`
  width: 50%; /* Adjusted image width */
  height: auto; /* Maintain aspect ratio */
  margin-right: 10px; /* Add spacing between image and title */
  margin: auto; /* Center the image horizontally */
  display: block; /* Ensure proper centering */
  max-height: 100%; /* Limit the image height to avoid overflow */
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: -50px; /* Adjusted margin */
`;

const ClickArea = styled(animated.div)`
  flex: 1;
  width: 100%;
`;

const DinnerImage = styled.img`
  width: ${props => (props.isExpanded ? '60%' : '45%')}; /* Adjusted image width based on expanded state */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 5%; /* Add spacing to the bottom */
  display: block; /* Ensure proper centering */
  margin: auto; /* Center the image horizontally */
`;

const RecipesTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  writing-mode: vertical-rl; /* Set writing mode to vertical right-to-left */
  margin: 20px 90% 0 20px; /* Adjusted margin */
  width: 5%;
`;

const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [leftSideClicked, setLeftSideClicked] = useState(false);
  const navigate = useNavigate();

  const leftSideAnimation = useSpring({
    width: isLeftExpanded ? '70%' : '100%',
  });

  const rightSideAnimation = useSpring({
    width: isLeftExpanded ? '30%' : '0%',
    transform: isLeftExpanded ? 'translateX(0%)' : 'translateX(100%)',
  });

  const dividerAnimation = useSpring({
    left: isLeftExpanded ? 'calc(70% - 2px)' : 'calc(100% - 2px)',
  });

  const handleClickLeft = () => {
    if (!leftSideClicked) {
      setIsLeftExpanded(!isLeftExpanded);
      setLeftSideClicked(true);
    }
  };

  const handleClickRight = () => {
    navigate('/newpage');
  };

  return (
    <Container>
      <Content>
        <LeftSide
          clickable={!leftSideClicked}
          expanded={isLeftExpanded}
          style={leftSideAnimation}
          onClick={handleClickLeft}
        >
          <Title href="/">STOCK</Title>
          <ClickArea />
          <DinnerImage
            src="/dinner.png"
            alt="Dinner"
            style={{ marginBottom: '30%' }} // Removed imageAnimation
            isExpanded={isLeftExpanded} // Added isExpanded prop
          />
        </LeftSide>
        <Divider style={dividerAnimation} />
        <RightSide
          expanded={!isLeftExpanded}
          style={rightSideAnimation}
          onClick={handleClickRight}
        >
          <RecipesTitle>RECIPES</RecipesTitle>
          <RecipesContainer>
            {Array.from({ length: 3 }).map((_, index) => (
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
