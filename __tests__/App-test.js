/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders App component correctly', () => {
  renderer.create(<App />);
});
