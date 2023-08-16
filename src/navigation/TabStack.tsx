import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import type {StackNavigationProp} from '@react-navigation/stack';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  LOCATION_TAB,
  GROUP_TAB,
  NONFILL_TAB,
  LOCATION_PIN_TAB,
  PROFILE_TAB,
} from '../common/constants/NavigationConstants';
import {COLORS} from '../common/constants/StyleConstants';
import {useAssets} from '../hooks/useAssets';
import {Tab} from '../common/components';

import {LocationStack} from './LocationStack';
import {GroupStack} from './GroupStack';
import {NonfillStack} from './NonfillStack';

export type TabStackParamList = {
  [LOCATION_TAB]: undefined;
  [GROUP_TAB]: undefined;
  [NONFILL_TAB]: undefined;
  [LOCATION_PIN_TAB]: undefined;
  [PROFILE_TAB]: undefined;
};

export type TabStackNavigationProp<RouteName extends keyof TabStackParamList> = StackNavigationProp<
  TabStackParamList,
  RouteName
>;

export type TabNavigations = {
  [RouteName in keyof TabStackParamList]: TabStackNavigationProp<RouteName>;
};

export type TabStackRoutes = {
  [RouteName in keyof TabStackParamList]: RouteProp<TabStackParamList, RouteName>;
};

const {Screen, Navigator} = createBottomTabNavigator<TabStackParamList>();

export function TabStack() {
  const assets = useAssets;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: RFValue(80),
          backgroundColor: COLORS.BACKGROUND_DARK,
        },
        tabBarHideOnKeyboard: true,
      }}
      initialRouteName={LOCATION_TAB}>
      <Screen
        name={LOCATION_TAB}
        component={LocationStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab
              icon={focused ? assets('main.location_active_tab') : assets('main.location_tab')}
            />
          ),
        }}
      />
      <Screen
        name={GROUP_TAB}
        component={GroupStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab icon={focused ? assets('main.group_active_tab') : assets('main.group_tab')} />
          ),
        }}
      />
      <Screen
        name={NONFILL_TAB}
        component={NonfillStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab icon={focused ? assets('main.nonfil_active_tab') : assets('main.nonfil_tab')} />
          ),
        }}
      />
      <Screen
        name={LOCATION_PIN_TAB}
        component={NonfillStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab
              icon={
                focused ? assets('main.location_pin_active_tab') : assets('main.location_pin_tab')
              }
            />
          ),
        }}
      />
      <Screen
        name={PROFILE_TAB}
        component={NonfillStack}
        options={{
          tabBarIcon: ({focused}) => (
            <Tab icon={focused ? assets('main.profile_active_tab') : assets('main.profile_tab')} />
          ),
        }}
      />
    </Navigator>
  );
}
