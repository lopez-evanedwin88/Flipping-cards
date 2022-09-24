/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import MainScreen from './src/screen/MainScreen';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <MainScreen />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
