import React, { useReducer } from 'react';
import styled from 'styled-components/native';
import { counterReducer } from '../../reducers/counterReducer';

const Counter = () => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  const clear = () => {
    dispatch({ type: 'CLEAR' });
  };

  const increment = () => {
    dispatch({
      type: 'INCREMENT',
      payload: 2,
    });
  };
  const decrement = () => {
    dispatch({
      type: 'DECREMENT',
      payload: 1,
    });
  };

  return (
    <StyledContainer>
      <StyledCountContainer>Count: {count}</StyledCountContainer>
      <StyledButton onPress={increment}>
        <StyledText>Increment</StyledText>
      </StyledButton>
      <StyledButton onPress={decrement}>
        <StyledText>Decrement</StyledText>
      </StyledButton>
      <StyledButton onPress={clear}>
        <StyledText>Clear</StyledText>
      </StyledButton>
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

const StyledCountContainer = styled.Text`
  font-size: 2rem;
  margin-bottom: 1rem;
`;

const StyledButton = styled.TouchableOpacity`
  background: #333;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: 0.5rem;
  margin-bottom: 0.5rem;
`;

const StyledText = styled.Text`
  color: whitesmoke;
`;
