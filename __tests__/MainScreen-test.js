/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import MainScreen from '../src/screen/MainScreen';
import {Button} from 'react-native';
import CFlipCard from '../src/components/FlipCard';

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

it('renders MainScreen component correctly', () => {
  jest.useFakeTimers();
  const component = renderer.create(<MainScreen />);

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it('Check if Restart button is visible', () => {
  jest.useFakeTimers();
  const component = renderer.create(<MainScreen />);
  const testInstance = component.root;

  expect(testInstance.findByType(Button).props.title).toBe('Restart');
});

it('Find 12 defined cards', () => {
  jest.useFakeTimers();
  const component = renderer.create(<MainScreen />);
  const testInstance = component.root;

  expect(testInstance.findAllByType(CFlipCard).length).toBe(12);
});

it('Testing to click cards', () => {
  jest.useFakeTimers();
  const ref = React.createRef();
  const itemTemplate = {num: 20, pair: false};
  const component = renderer.create(
    <CFlipCard
      ref={ref}
      item={itemTemplate}
      onFlipCard={() => {
        ref.current.flipHorizontal();
      }}
      onFlipEnd={() => {}}
    />,
  );
  const testInstance = component.root;
  testInstance.props.onFlipCard();
  //flipped to front
  expect(ref.current.state.side).toBe(1);
});
