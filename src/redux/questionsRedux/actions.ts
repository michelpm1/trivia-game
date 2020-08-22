import {
    Question,
    QuestionActionTypes,
    START_QUESTIONS,
    QUESTIONS_LOADED,
} from '../types'

export function questionsLoaded(questions: Question[]): QuestionActionTypes {
    return {
        type: QUESTIONS_LOADED,
        payload: { questions }
    }
}

export function startQuestions(): QuestionActionTypes {
    return {
        type: START_QUESTIONS
    }
}
