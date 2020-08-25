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

            const isCorrect = state.questions[questionNumber].rightAnswer === answer

            const questions = [...state.questions]

            questions[state.currentQuestion].answer = answer

            let answerStats = {};

            if (isCorrect) {
                answerStats = {
                    correctAnswers: state.correctQuestions + 1,
                }
            } else {
                answerStats = {
                    incorrectAnswers: state.incorrectQuestions + 1,
                }
            }

            return {
                ...state,
                ...answerStats,
                currentQuestion: state.currentQuestion + 1,
                questions
            }
        }
        default: {
            return state
        }
    }
}

export default questionsReducer;