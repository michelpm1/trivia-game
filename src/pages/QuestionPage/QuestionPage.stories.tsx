import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider, ReactReduxContext } from 'react-redux';
import { questionsLoaded } from '../../redux/questionsRedux/actions';
import { loadComplete } from '../../redux/loadRedux/actions';
import store from '../../redux/store';
import QuestionPage from './QuestionPage';

const stories = storiesOf('QuestionPage', module);
stories.add('QuestionPage', () =>
    <Provider store={store}>
        <ReactReduxContext.Consumer>
            {({ store }) => {
                store.dispatch(loadComplete())
                store.dispatch(questionsLoaded([
                    {
                        category: 'Industry',
                        difficulty: 'easy',
                        correctAnswer: false,
                        question: 'Test question',
                        type: 'boolean',
                    }
                ]))
                return <QuestionPage />
            }}
        </ReactReduxContext.Consumer>
    </Provider>)