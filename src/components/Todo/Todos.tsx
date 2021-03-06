import React, { useReducer, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { todoReducer } from '../../reducers/todoReducer';
import { TypeTodo } from '../../types/todoTypes';
import styled from 'styled-components/native';
import Todo from './Todo';
import { StyledFullWidthButton } from './../../styles/buttons';

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
  const removeTodo = (id: number) => {
    dispatch({
      type: 'REMOVE',
      payload: id,
    });
  };

  const clearTodos = () => {
    dispatch({
      type: 'CLEAR',
    });
  };

  React.useEffect(() => {
    let todos = localStorage.getItem('todos');
    if (todos) {
      const parsedTodos: TypeTodo[] = JSON.parse(todos);
      parsedTodos.forEach((todo) => {
        dispatch({
          type: 'ADD',
          payload: {
            title: todo.title,
            completed: todo.completed,
            id: todo.id,
          },
        });
      });
    }
  }, []);

  React.useEffect(() => {
    localStorage.removeItem('todos');
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <StyledContainer>
      <StyledTitle>Todo List</StyledTitle>
      <StyledInput
        placeholder='Add Todo'
        label='Add Todo'
        value={inputText}
        onChangeText={(text: string) => setInputText(text)}
      />
      <StyledFullWidthButton
        fontSize='20px'
        text='Submit Todo'
        addTodo={addTodo}
      />
      <FlatList
        data={todos}
        keyExtractor={(item) => JSON.stringify(item.id)}
        renderItem={(objectThingy) => (
          <Todo
            clearTodos={clearTodos}
            removeTodo={removeTodo}
            todo={objectThingy.item}
          />
        )}
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

const StyledInput = styled.TextInput`
  padding: 0.5rem;
  width: 60vw;
  margin: 0.3rem 0;
`;

// Export

export default Todos;
