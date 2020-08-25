import {
    QuestionsState,
    QuestionActionTypes,
    START_QUESTIONS,
    QUESTIONS_LOADED,
    ANSWER_QUESTION,
} from '../types'

const initialState: QuestionsState = {
    questions: [],
    correctQuestions: 0,
    incorrectQuestions: 0,
    progress: 'intro',
    currentQuestion: 1,
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

        case ANSWER_QUESTION: {
            const {
                payload: {
                    answer,
                    questionNumber
                }
            } = action


            const isCorrect = state.questions[questionNumber - 1].correctAnswer === answer;

            const questions = [...state.questions];
            questions[state.currentQuestion - 1].answer = answer;

            let resultQuestions = {};

            if (isCorrect) {
                resultQuestions = {
                    correctQuestions: state.correctQuestions + 1,
                }
            } else {
                resultQuestions = {
                    incorrectQuestions: state.incorrectQuestions + 1,
                }
            }

            return state.currentQuestion !== 10 ? {
                ...state,
                ...resultQuestions,
                currentQuestion: state.currentQuestion + 1,
                questions
            } : {
                    ...state,
                    ...resultQuestions,
                    questions,
                    progress: 'finished'
                }
        }
        default: {
            return state
        }
    }
}

export default questionsReducer;