import React, { FC } from 'react';
import { View, Text } from 'react-native';
import { TypeTodo } from '../../types/todoTypes';

type Props = {
  todo: TypeTodo;
};

const Todo: FC<Props> = ({ todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
    </View>
  );
};

export default Todo;
