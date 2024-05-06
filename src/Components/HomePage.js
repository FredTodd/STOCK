import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.div`
  display: flex;
  position: relative;
  width: 100%;
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
  position: relative;
`;

const RightSide = styled(animated.div)`
  width: 30%;
  background-color: #FEFAE0;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
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
  margin: 20px 20px 0 20px;
  text-decoration: none;
  color: inherit;
`;

const PlateImage = styled.img`
  width: ${props => (props.isExpanded ? '60%' : '45%')};
  height: auto;
  margin-bottom: 5%;
  display: block;
  margin: auto;
`;

const GreenPoint = styled(animated.div)`
  width: 20px;
  height: 20px;
  background-color: darkgreen;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  cursor: pointer;

  /* Hover effect */
  &:hover::after {
    content: '';
    position: absolute;
    width: 4px;
    height: 100%;
    background-color: darkgreen;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1; /* Ensure the line appears above the GreenPoint */
  }
`;

const RecipeLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  cursor: pointer;
`;

const RecipeImage = styled.img`
  width: 50%;
  height: auto;
  margin-right: 10px;
  margin: auto;
  display: block;
  max-height: 100%;
`;

const RecipesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: -50px;
`;

const RecipesTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  writing-mode: vertical-rl;
  margin: 20px 90% 0 20px;
  width: 5%;
`;

const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [leftSideClicked, setLeftSideClicked] = useState(false);
  const [greenPointsVisible, setGreenPointsVisible] = useState(false);
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

  const greenPointAnimation = useSpring({
    opacity: greenPointsVisible ? 1 : 0,
  });

  const handleClickLeft = () => {
    if (!leftSideClicked) {
      setIsLeftExpanded(!isLeftExpanded);
      setLeftSideClicked(true);
      setGreenPointsVisible(true);
    }
  };

  const handleClickRight = () => {
    navigate('/RecipePage');
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
          <PlateImage
            src="/plate.png"
            alt="Plate"
            isExpanded={isLeftExpanded}
          />
          {greenPointsVisible && (
            <>
              <GreenPoint style={{ top: '35%', left: '9%' }} />
              <GreenPoint style={{ top: '70%', left: '20%' }} />
              <GreenPoint style={{ top: '30%', left: '75%' }} />
              <GreenPoint style={{ top: '50%', left: '90%' }} />
              <GreenPoint style={{ top: '80%', left: '80%' }} />
            </>
          )}
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
