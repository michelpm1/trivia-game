import { Dispatch } from 'redux';
import { getTriviaQuestions } from '../api/opentdbApi';
import { loadActive, loadComplete } from './loadRedux/actions'

export function startApp() {
    return async function (dispatch: Dispatch) {
        dispatch(loadActive())

        const response = await getTriviaQuestions(10, 'hard', 'boolean ');

        dispatch(loadComplete())

    }
}