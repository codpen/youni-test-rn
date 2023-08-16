import React from 'react';
import {NavigationContainer, createNavigationContainerRef} from '@react-navigation/native';
import {AppStack} from './AppStack';

export const navigationRef = createNavigationContainerRef();

export function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack />
    </NavigationContainer>
  );
}
