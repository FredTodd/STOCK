import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const FilterBar = styled.div`
  width: 20%;
  background-color: #606C38;
  position: fixed;
  top: 18%;
  bottom: 0;
  left: -1%;
  overflow-y: auto;
  border-radius: 16px;
`;

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
  return (
    <Container>
      <FilterBar>
        {/* Filter options will go here */}
      </FilterBar>
      <Content>
        <Title>STOCK</Title>
        <RecipeGallery>
          {Array.from({ length: 15 }).map((_, index) => (
            <RecipeThumbnail key={index}>
              <ThumbnailImage src="/IMG_0518.JPG" alt={`Recipe ${index + 1}`} />
              <RecipeTitle>Recipe {index + 1}</RecipeTitle>
            </RecipeThumbnail>
          ))}
        </RecipeGallery>
      </Content>
    </Container>
  );
};

export default RecipePage;
