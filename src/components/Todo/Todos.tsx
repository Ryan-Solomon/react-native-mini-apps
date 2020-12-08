import React, { useReducer } from 'react';
import { View, Text } from 'react-native';
import { todoReducer } from '../../reducers/todoReducer';
import { TypeTodo } from '../../types/todoTypes';

export const initialTodoState: TypeTodo[] = [];

const Todos = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialTodoState);

  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default Todos;
