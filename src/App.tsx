/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {memo} from 'react';
import {AppNavigator} from './navigation';

function App(): JSX.Element {
  return <AppNavigator />;
}

export default memo(App);
