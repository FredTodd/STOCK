import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useNavigate } from 'react-router-dom';
import RecipeDetailPage from './RecipeDetailPage'; // Import the RecipeDetailPage component

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
  background-color: #283618;
  height: 200vh;
  position: absolute;
  top: 0;
`;

const Title = styled.a`
  font-family: 'Poppins', sans-serif;
  font-size: 4rem;
  font-weight: bold;
  margin: 20px 20px 0 20px;
  text-decoration: none;
  color: #283618;
`;

const PlateImage = styled.img`
  max-width: ${props => (props.isExpanded ? '60%' : '40%')}; /* Added max-width */
  display: block;
  border-radius: 50%;
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const GreenPoint = styled(animated.div)`
  width: 20px;
  height: 20px;
  background-color: #283618;
  border-radius: 50%;
  position: absolute;
  z-index: 999;
  cursor: pointer;
`;

const Annotation = styled(animated.div)`
  position: absolute;
  background-color: rgba(40, 54, 24, 0.8);
  color: #b8e6b8;
  padding: 5px 10px;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  opacity: ${props => (props.visible ? 1 : 0)};
  /* Dynamically set position based on the green point */
  top: ${props => props.top};
  left: ${props => props.left};
`;

const IngredientBox = styled(animated.div)`
  background-color: #606C38;
  border-radius: 50%; /* Add border-radius to make it a circle */
  position: absolute;
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  color: #FEFAE0;
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  text-align: center;
  width: 37vw; /* Set width to 25% of the viewport width */
  height: 37vw; /* Set height to 25% of the viewport width */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 48%;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: #283618;
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
  font-weight: bold;
  writing-mode: vertical-rl;
  margin: 20px 90% 0 20px;
  width: 5%;
  color: #283618;
`;

const BottomTitle = styled.a`
  position: fixed;
  bottom: 1%;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: #283618;
  opacity: ${props => (props.isVisible ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  text-decoration: underline;
`;


const HomePage = () => {
  const [isLeftExpanded, setIsLeftExpanded] = useState(true);
  const [showBottomTitle, setShowBottomTitle] = useState(false);
  const [leftSideClicked, setLeftSideClicked] = useState(false);
  const [greenPointsVisible, setGreenPointsVisible] = useState(false);
  const [ingredientClicked, setIngredientClicked] = useState(null);
  const [ingredientHovered, setIngredientHovered] = useState(null);
  const navigate = useNavigate();

  // Define the text for each ingredient
  const [ingredientText, setIngredientText] = useState({
    'Ingredient 1': {
      title: 'Cod',
      body: 'Fresh cod fillets, harvested from pristine waters, offer a clean, mild taste with a hint of sweetness. Perfect for grilling, baking, or frying, they pair effortlessly with lemon, herbs, and a variety of side dishes, making them a versatile and delightful addition to any meal.',
    },
    'Ingredient 2': {
      title: 'Parsley',
      body: 'Parsley, a vibrant herb with a refreshing taste, adds a burst of flavor to dishes. Whether used as a garnish or incorporated into recipes, its bright, slightly peppery notes elevate the overall taste. It complements a wide range of cuisines, from Mediterranean to Asian, and pairs wonderfully with seafood, meats, salads, and sauces.',
    },
    'Ingredient 3': {
      title: 'Parmesan Cheese',
      body: 'Grated Parmesan cheese, with its rich and nutty flavor, adds a savory depth to dishes. Versatile and beloved in Italian cuisine, it enhances pasta, risotto, salads, and soups with its sharp and salty taste. Its fine texture melts beautifully when sprinkled over hot dishes, making it a delightful finishing touch to elevate your culinary creations.',
    },
    'Ingredient 4': {
      title: 'Fresh Breadcrumbs',
      body: 'Fresh breadcrumbs, crafted from day-old bread, add a crispy texture and absorb flavors, perfect for coating meats and topping casseroles. They offer a simple yet effective way to elevate dishes with a satisfying crunch, enhancing both taste and presentation.',
    },
    'Ingredient 5': {
      title: 'Lemons',
      body: 'Lemons, with their vibrant color and tangy flavor, bring a refreshing zest to both sweet and savory dishes. From brightening up seafood with a squeeze of juice to adding a citrusy kick to desserts, lemons are versatile culinary gems. Their acidic brightness can balance rich flavors, while their aromatic zest adds depth to marinades, dressings, and cocktails.',
    },
  });

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

  const annotationAnimation = useSpring({
    opacity: ingredientClicked ? 1 : 0,
    transform: ingredientClicked ? 'translate(-50%, -30px) scale(1)' : 'translate(-50%, -30px) scale(0)',
  });

  const ingredientBoxAnimation = useSpring({
    opacity: ingredientClicked ? 1 : 0,
    transform: ingredientClicked ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
  });

  const handleClickLeft = () => {
    if (!leftSideClicked) {
      setIsLeftExpanded(!isLeftExpanded);
      setLeftSideClicked(true);
      setGreenPointsVisible(true);
      setShowBottomTitle(true);
    }
  };

  const handleClickRight = () => {
    navigate('/RecipePage');
  };
  
  const handleGreenPointClick = ingredient => {
    setIngredientClicked(ingredient);
  };

  const handleGreenPointHover = (ingredient, position) => {
    setIngredientHovered(ingredient);
  };

  const handleCloseButtonClick = () => {
    setIngredientClicked(null);
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
            src="/Cod_Mornay.png"
            alt="Plate"
            isExpanded={isLeftExpanded}
          />
          {greenPointsVisible && (
            <>
              <GreenPoint
                style={{ ...greenPointAnimation, top: '35%', left: '9%' }}
                onMouseEnter={() => handleGreenPointHover('Ingredient 1', { top: '33%', left: '10%' })}
                onClick={() => handleGreenPointClick('Ingredient 1')}
              />
              <GreenPoint
                style={{ ...greenPointAnimation, top: '70%', left: '20%' }}
                onMouseEnter={() => handleGreenPointHover('Ingredient 2', { top: '68%', left: '21%' })}
                onClick={() => handleGreenPointClick('Ingredient 2')}
              />
              <GreenPoint
                style={{ ...greenPointAnimation, top: '30%', left: '75%' }}
                onMouseEnter={() => handleGreenPointHover('Ingredient 3', { top: '28%', left: '76%' })}
                onClick={() => handleGreenPointClick('Ingredient 3')}
              />
              <GreenPoint
                style={{ ...greenPointAnimation, top: '50%', left: '90%' }}
                onMouseEnter={() => handleGreenPointHover('Ingredient 4', { top: '48%', left: '91%' })}
                onClick={() => handleGreenPointClick('Ingredient 4')}
              />
              <GreenPoint
                style={{ ...greenPointAnimation, top: '80%', left: '80%' }}
                onMouseEnter={() => handleGreenPointHover('Ingredient 5', { top: '78%', left: '81%' })}
                onClick={() => handleGreenPointClick('Ingredient 5')}
              />
            </>
          )}

          {ingredientClicked && (
            <IngredientBox style={ingredientBoxAnimation}>
              <CloseButton onClick={handleCloseButtonClick}>X</CloseButton>
              <h3>{ingredientText[ingredientClicked].title}</h3>
              <p>{ingredientText[ingredientClicked].body}</p>
          </IngredientBox>
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
            {/* Replaced the image sources */}
            <RecipeLink>
              <RecipeImage src="/Dhal.jpg" alt="Recipe 1" />
            </RecipeLink>
            <RecipeLink>
              <RecipeImage src="/Samosa.jpg" alt="Recipe 2" />
            </RecipeLink>
            <RecipeLink>
              <RecipeImage src="/Bakewell.jpg" alt="Recipe 3" />
            </RecipeLink>
          </RecipesContainer>
        </RightSide>
      </Content>
      <BottomTitle href="/recipe/10" isVisible={showBottomTitle}>Cod Mornay</BottomTitle>
    </Container>
  );
};

export default HomePage;
