import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import IntroPage from './IntroPage';

const stories = storiesOf('IntroPage', module);
stories.add('IntroPage', () => (
  <Provider store={store}>
    <IntroPage />
  </Provider>
));
