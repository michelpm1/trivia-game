import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider, ReactReduxContext } from 'react-redux';
import { questionsLoaded, loadComplete } from '../../redux/actions';
import store from '../../redux/store';
import ResultPage from './ResultPage';

const stories = storiesOf('ResultPage', module);

stories.add('ResultPage', () => (
  <Provider store={store}>
    <ReactReduxContext.Consumer>
      {() => {
        store.dispatch(loadComplete());
        store.dispatch(
          questionsLoaded([
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
          ])
        );
        return <ResultPage />;
      }}
    </ReactReduxContext.Consumer>
  </Provider>
));
