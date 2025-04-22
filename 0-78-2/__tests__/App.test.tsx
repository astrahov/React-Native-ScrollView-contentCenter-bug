/**
 * @format
 */

import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import HomeScreen from '../src/HomeScreen.tsx';

test('renders correctly', async () => {
  await ReactTestRenderer.act(() => {
    ReactTestRenderer.create(<HomeScreen />);
  });
});
