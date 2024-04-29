import React from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const LeftSide = styled.div`
  width: 70%;
  background-color: #ffffff; /* Adjust as needed */
`;

const RightSide = styled.div`
  width: 30%;
  background-color: #ffffff; /* Adjust as needed */
`;

const Divider = styled.div`
  width: 4px;
  background-color: #000000; /* Black color */
`;

const RecipePage = () => {
  return (
    <Container>
      <LeftSide>
        {/* Content for the left side */}
      </LeftSide>
      <Divider />
      <RightSide>
        {/* Content for the right side */}
      </RightSide>
    </Container>
  );
};

export default RecipePage;
