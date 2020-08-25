import * as React from 'react';
import { useSelector } from 'react-redux';
import { ProgressState } from './redux/types';
import IntroPage from './pages/IntroPage/IntroPage';
import QuestionsPage from './pages/QuestionPage/QuestionPage';

const Router = () => {
    const actualState = useSelector((state: ProgressState) => {
        const { status } = state;
        return status.progress
    });
    switch (actualState) {
        case 'finished':
            return <div>test</div>;

        case 'started':
            return <QuestionsPage />

        default:
            return <IntroPage />
    }
}

export default Router;
