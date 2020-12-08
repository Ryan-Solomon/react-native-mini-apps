import React, { FC } from 'react';
import styled from 'styled-components/native';

const StyledButtonFullWidth = styled.TouchableOpacity`
  width: 100vw;
  background: #333;
`;

const StyledButtonText = styled.Text`
  color: white;
  padding: 10px;
  text-align: center;
  font-size: ${(props) => props.fontSize || '8px'};
`;

type Props = {
  addTodo: () => void;
  text: string;
  fontSize?: string;
};

export const StyledFullWidthButton: FC<Props> = ({
  fontSize,
  addTodo,
  text,
}) => {
  return (
    <StyledButtonFullWidth onPress={addTodo}>
      <StyledButtonText fontSize={fontSize}>{text}</StyledButtonText>
    </StyledButtonFullWidth>
  );
};
