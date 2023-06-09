import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainDrawerNavigator from './src/navigation/MainDrawerNavigator.js';

const App = () => {
  return (
    <NavigationContainer>
      <MainDrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
