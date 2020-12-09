import React, { FC, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TypeTodo } from '../../types/todoTypes';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  todo: TypeTodo;
  removeTodo: (id: number) => void;
  clearTodos: () => void;
};

const Todo: FC<Props> = ({ todo, removeTodo, clearTodos }) => {
  const [completed, setCompleted] = useState(() => todo.completed);

  const toggleCompleted = () => {
    setCompleted(!completed);
  };

  return (
    <StyledView>
      <StyledTitleAndButtonContainer>
        <StyledTitle>{todo.title}</StyledTitle>
        <StyledButtonContainer>
          {completed ? (
            <StyledButton onPress={toggleCompleted}>
              <Text>Completed! Mark as incomplete</Text>
            </StyledButton>
          ) : (
            <>
              <StyledButton onPress={() => removeTodo(todo.id)}>
                <Text>Remove</Text>
              </StyledButton>
              <StyledButton onPress={clearTodos}>
                <Text>Clear All</Text>
              </StyledButton>
              <StyledButton onPress={toggleCompleted}>
                <Text>Complete</Text>
              </StyledButton>
            </>
          )}
        </StyledButtonContainer>
      </StyledTitleAndButtonContainer>
    </StyledView>
  );
};

// Styles

const StyledView = styled.View`
  background: #018c9b;
  width: 100vw;
  margin: 0.5rem 0;
  padding: 0.2rem 0.2rem;
`;

const StyledTitle = styled.Text`
  font-size: 1.5rem;
  text-align: center;
`;

const StyledTitleAndButtonContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledButtonContainer = styled.View`
  flex-direction: row;
`;

const StyledButton = styled.TouchableOpacity`
  margin: 0 0.6rem;
`;

export default Todo;
