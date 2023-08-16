import React from 'react';
import {RouteProp} from '@react-navigation/native';
import type {StackNavigationProp} from '@react-navigation/stack';
import {createStackNavigator} from '@react-navigation/stack';
import {HOME} from '../common/constants/NavigationConstants';
import DefaultTheme from '../common/theme';

import {TabStack} from './TabStack';

export type AppStackParamList = {
  [HOME]: undefined;
};

export type AppStackNavigationProp<RouteName extends keyof AppStackParamList> = StackNavigationProp<
  AppStackParamList,
  RouteName
>;

export type AppNavigations = {
  [RouteName in keyof AppStackParamList]: AppStackNavigationProp<RouteName>;
};

export type AppStackRoutes = {
  [RouteName in keyof AppStackParamList]: RouteProp<AppStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<AppStackParamList>();

export function AppStack() {
  return (
    <Navigator initialRouteName={HOME}>
      <Screen
        name={HOME}
        component={TabStack}
        options={{
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
