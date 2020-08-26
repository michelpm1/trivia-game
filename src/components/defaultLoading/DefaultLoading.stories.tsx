import * as React from 'react';
import { storiesOf } from '@storybook/react';
import DefaultLoading from './DefaultLoading';

const stories = storiesOf('DefaultLoading', module);
stories.add('DefaultLoading', () => (
  <div>
    <DefaultLoading />
  </div>
));
