import { StackScreenProps } from '@react-navigation/stack/lib/typescript/src/types';
import React, { FC } from 'react';
import { Button } from 'react-native';
import { Text, View } from 'react-native';
import { RootParamList } from '../../App';

type Props = StackScreenProps<RootParamList, 'Home'>;

const HomeScreen: FC<Props> = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button title='Todos' onPress={() => navigation.navigate('Todo')} />
      <Button title='Counter' onPress={() => navigation.navigate('Counter')} />
    </View>
  );
};

export default HomeScreen;
