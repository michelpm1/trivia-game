import * as React from 'react';
import { storiesOf } from '@storybook/react';
import QuestionTypeBox from './QuestionTypeBox';

const stories = storiesOf('QuestionTypeBox', module);
stories.add('QuestionTypeBox', () => (
  <div>
    <QuestionTypeBox>Entertainment: Board Games</QuestionTypeBox>
  </div>
));
