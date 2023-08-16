import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import type {StackNavigationProp} from '@react-navigation/stack';
import {LOCATION_SCREEN} from '../common/constants/NavigationConstants';

import LoationScreen from '../screens/Home';

export type LocationStackParamList = {
  [LOCATION_SCREEN]: undefined;
};

export type LocationStackNavigationProp<RouteName extends keyof LocationStackParamList> =
  StackNavigationProp<LocationStackParamList, RouteName>;

export type HomeNavigations = {
  [RouteName in keyof LocationStackParamList]: LocationStackNavigationProp<RouteName>;
};

export type HomeStackRoutes = {
  [RouteName in keyof LocationStackParamList]: RouteProp<LocationStackParamList, RouteName>;
};

const {Screen, Navigator} = createStackNavigator<LocationStackParamList>();

export function LocationStack() {
  return (
    <Navigator screenOptions={{headerShown: false}} initialRouteName={LOCATION_SCREEN}>
      <Screen name={LOCATION_SCREEN} component={LoationScreen} />
    </Navigator>
  );
}
