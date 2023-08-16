import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {NONFILL_SCREEN} from '../common/constants/NavigationConstants';

import NonfillScreen from '../screens/Nonfill';

export type NonfillStackParamList = {
  [NONFILL_SCREEN]: undefined;
};

export type NonfillStackNavigationProp<RouteName extends keyof NonfillStackParamList> =
  StackNavigationProp<NonfillStackParamList, RouteName>;

export type GroupNavigations = {
  [RouteName in keyof NonfillStackParamList]: NonfillStackNavigationProp<RouteName>;
};

export type GroupStackRoutes = {
  [RouteName in keyof NonfillStackParamList]: RouteProp<NonfillStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<NonfillStackParamList>();

export function NonfillStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={NONFILL_SCREEN}>
      <Screen name={NONFILL_SCREEN} component={NonfillScreen} />
    </Navigator>
  );
}
