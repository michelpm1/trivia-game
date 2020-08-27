import * as React from 'react';
import { useSelector } from 'react-redux';
import { ProgressState } from './redux/types';
import IntroPage from './pages/IntroPage/IntroPage';
import QuestionsPage from './pages/QuestionPage/QuestionPage';
import ResultPage from './pages/ResultPage/ResultPage';
import { STATUS_STARTED, STATUS_FINISHED } from './constants';

/**
 * A simple state-based router. I use the constants 
 * to define where the user should e redirect
 * @param state The progress state to use for routing.
 */
const Router = () => {
  const actualState = useSelector((state: ProgressState) => {
    const { status } = state;
    return status.progress;
  });
  switch (actualState) {
    case STATUS_FINISHED:
      return <ResultPage />;

    case STATUS_STARTED:
      return <QuestionsPage />;

    default:
      return <IntroPage />;
  }
};

export default Router;
