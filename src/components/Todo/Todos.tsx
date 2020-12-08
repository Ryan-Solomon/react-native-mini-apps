import React, { useReducer, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { todoReducer } from '../../reducers/todoReducer';
import { TypeTodo } from '../../types/todoTypes';

export const initialTodoState: TypeTodo[] = [];

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
  };

  return (
    <View>
      <Text>Todo List</Text>
      <TextInput
        placeholder='Add Todo'
        value={inputText}
        onChangeText={(text) => setInputText(text)}
      />
      <Button onPress={addTodo} title='Add' />
    </View>
  );
};

export default Todos;
