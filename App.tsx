import React from 'react';
import { View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='todo'
          component={TodoScreen}
          options={{ title: 'Todos' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
