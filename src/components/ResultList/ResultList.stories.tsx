import * as React from 'react';
import { storiesOf } from '@storybook/react';

import ResultList from './ResultList';

const stories = storiesOf('ResultList', module);
stories.add('ResultList', () => (
  <div>
    <ResultList
      entries={[
        {
          type: 'boolean',
          category: 'Equipment',
          difficulty: 'easy',
          question: 'Is it right?',
          correctAnswer: true,
          answer: false,
        },
        {
          type: 'boolean',
          category: 'Video Games',
          difficulty: 'easy',
          question: 'Pikachu is a rat?',
          correctAnswer: true,
          answer: true,
        },
        {
          type: 'boolean',
          category: 'Video Games',
          difficulty: 'easy',
          question: 'Samus from metroid is a woman?',
          correctAnswer: true,
          answer: true,
        },
        {
          type: 'boolean',
          category: 'History',
          difficulty: 'easy',
          question: 'World War 2 started in 1938?',
          correctAnswer: true,
          answer: true,
        },
      ]}
    />
  </div>
));
