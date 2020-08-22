import { Dispatch } from 'redux';
import { getTriviaQuestions } from '../api/opentdbApi';
import { loadActive, loadComplete } from './loadRedux/actions'
import { startQuestions, questionsLoaded } from './questionsRedux/actions'

export const startApp = () => {
    return async (dispatch: Dispatch) => {
        dispatch(loadActive())

        const response = await getTriviaQuestions(10, 'hard', 'boolean ');
        dispatch(loadComplete())
        dispatch(questionsLoaded(response.questions))
        dispatch(startQuestions())
    }
}