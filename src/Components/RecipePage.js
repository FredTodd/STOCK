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

const Content = styled.div`
  padding: 20px;
`;

const RecipePage = () => {
  return (
    <Container>
      <LeftSide>
        <Content>
          {/* Content for the left side */}
          <h2>Left Side Content</h2>
          <p>This is where you can display information related to the recipe.</p>
        </Content>
      </LeftSide>
      <Divider />
      <RightSide>
        <Content>
          {/* Content for the right side */}
          <h2>Right Side Content</h2>
          <p>This is where you can display the details of the selected recipe.</p>
        </Content>
      </RightSide>
    </Container>
  );
};

export default RecipePage;
