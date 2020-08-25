import {
    Question,
    QuestionActionTypes,
    START_QUESTIONS,
    QUESTIONS_LOADED,
    Answer,
    ANSWER_QUESTION,
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

export function answerQuestion(payload: Answer): QuestionActionTypes {
    return {
        type: ANSWER_QUESTION,
        payload
    }
}
