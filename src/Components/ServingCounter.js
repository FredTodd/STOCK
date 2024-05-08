import React, { useState } from 'react';
import styled from 'styled-components';

const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end; /* Align counter to the right */
  margin-bottom: 10px;
`;

const CounterText = styled.span`
  margin-right: 5px;
`;

const CounterButton = styled.button`
  background-color: #283618;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;
`;

const CounterValue = styled.span`
  font-size: 1rem;
`;

const ServingCounter = ({ servings, setServings }) => {
  const handleAddServing = () => {
    if (servings < 10) {
      setServings((prevServings) => prevServings + 1);
    }
  };

  const handleRemoveServing = () => {
    if (servings > 1) {
      setServings((prevServings) => prevServings - 1);
    }
  };

  return (
    <CounterContainer>
      <CounterText>Serves:</CounterText>
      <CounterButton onClick={handleRemoveServing}>-</CounterButton>
      <CounterValue>{servings}</CounterValue>
      <CounterButton onClick={handleAddServing}>+</CounterButton>
    </CounterContainer>
  );
};

export default ServingCounter;
