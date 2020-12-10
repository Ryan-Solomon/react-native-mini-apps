import React from 'react';
import TodoScreen from './src/screens/TodoScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import CounterScreen from './src/screens/CounterScreen';
import CocktailsScreen from './src/screens/CocktailsScreen';

export type RootParamList = {
  Home: undefined;
  Todo: undefined;
  Counter: undefined;
  Cocktails: undefined;
};
const Stack = createStackNavigator<RootParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Cocktails'>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
          options={{ title: 'Todos' }}
        />
        <Stack.Screen
          name='Todo'
          component={TodoScreen}
          options={{ title: 'Todos' }}
        />
        <Stack.Screen
          name='Counter'
          component={CounterScreen}
          options={{ title: 'Counter' }}
        />
        <Stack.Screen
          name='Cocktails'
          component={CocktailsScreen}
          options={{ title: 'Cocktails' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
