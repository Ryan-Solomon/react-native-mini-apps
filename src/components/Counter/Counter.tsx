import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const Counter = () => {
  return (
    <StyledContainer>
      <Text>Count</Text>
    </StyledContainer>
  );
};

export default Counter;

// Styles

const StyledContainer = styled.View`
  height: 90vh;
  justify-content: center;
  align-items: center;
`;
