import React, { useReducer, useState } from 'react';
import { Text } from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import { todoReducer } from '../../reducers/todoReducer';
import { TypeTodo } from '../../types/todoTypes';
import styled from 'styled-components/native';
import Todo from './Todo';

// Initial State

export const initialTodoState: TypeTodo[] = [];

// Component

const Todos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);
  const [inputText, setInputText] = useState('');

  const addTodo = () => {
    if (inputText) {
      dispatch({
        type: 'ADD',
        payload: {
          title: inputText,
          completed: false,
          id: Math.random(),
        },
      });
    }
    setInputText('');
  };

  return (
    <StyledContainer>
      <StyledTitle>Todo List</StyledTitle>
      <StyledInput
        placeholder='Add Todo'
        label='Add Todo'
        value={inputText}
        onChangeText={(text: string) => setInputText(text)}
      />
      <StyledButton onPress={addTodo} title='Add'>
        <Text>Add Todo</Text>
      </StyledButton>
      <FlatList
        data={todos}
        keyExtractor={(item) => JSON.stringify(item.id)}
        renderItem={(objectThingy) => <Todo todo={objectThingy.item} />}
      />
    </StyledContainer>
  );
};

// Styles

const StyledContainer = styled.View`
  align-items: center;
  height: 90vh;
`;

const StyledTitle = styled.Text`
  font-size: 32px;
`;

const StyledButton = styled.TouchableOpacity`
  background: #bbbbbb;
  align-self: stretch;
  text-align: center;
  padding: 0.4rem;
  margin-top: 1rem;
`;

const StyledInput = styled.TextInput`
  padding: 0.5rem;
  width: 60vw;
  margin: 0.3rem 0;
`;

const StyledFlatList = styled(FlatList as new () => FlatList<TypeTodo>)`
  background-color: #f7f7f7;
`;

// Export

export default Todos;
