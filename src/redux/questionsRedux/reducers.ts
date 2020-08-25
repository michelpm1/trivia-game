import {
    QuestionsState,
    QuestionActionTypes,
    START_QUESTIONS,
    QUESTIONS_LOADED,
} from '../types'

const initialState: QuestionsState = {
    questions: [],
    correctQuestions: 0,
    incorrectQuestions: 0,
    progress: 'intro',
    currentQuestion: 0,
}

const questionsReducer = (
    state = initialState,
    action: QuestionActionTypes
): QuestionsState => {
    switch (action.type) {
        case START_QUESTIONS: {
            return {
                ...state,
                progress: 'started'
            }
        }

        case QUESTIONS_LOADED: {
            return {
                ...state,
                questions: action.payload.questions
            }
        }
        default: {
            return state
        }
    }
}

export default questionsReducer;