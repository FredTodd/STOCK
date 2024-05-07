import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const LeftColumn = styled.div`
  width: 20%;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  background-color: #FEFAE0;
  /* Add additional styling for the filter bar */
`;

const RightColumn = styled.div`
  flex: 1;
  padding-left: 20%; /* Same width as LeftColumn */
  overflow-y: auto; /* Enable vertical scrolling */
`;

const Header = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin: 20px;
  color: #283618;
`;

const RecipePage = () => {
  return (
    <Container>
      <LeftColumn>
        {/* Add filter bar content here */}
      </LeftColumn>
      <RightColumn>
        <Header>STOCK</Header>
        {/* Add recipe gallery here */}
      </RightColumn>
    </Container>
  );
};

export default RecipePage;
