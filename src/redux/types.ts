
export const LOAD_COMPLETE = 'LOAD_COMPLETE'
export const LOAD_ACTIVE = 'LOAD_ACTIVE'

export const START_QUESTIONS = 'START_QUESTIONS'
export const QUESTIONS_LOADED = 'QUESTIONS_LOADED'
export const ANSWER_QUESTION = 'ANSWER_QUESTIONS'

interface LoadActiveAction {
    type: typeof LOAD_ACTIVE
}

export interface Answer {
    answer: boolean,
    questionNumber: number
}

interface LoadCompleteAction {
    type: typeof LOAD_COMPLETE
}

export interface LoadState {
    loading: boolean
}

export interface ApiResponse {
    questions: Question[],
}

interface StartQuestionsAction {
    type: typeof START_QUESTIONS
}

interface QuestionsLoaded {
    type: typeof QUESTIONS_LOADED,
    payload: ApiResponse
}

export type QuestionActionTypes = StartQuestionsAction | QuestionsLoaded | AnswerQuestionAction


export type LoadActionTypes = LoadActiveAction | LoadCompleteAction;

export interface ProgressState {
    status: QuestionsState,
    load: LoadState
}

interface AnswerQuestionAction {
    type: typeof ANSWER_QUESTION,
    payload: Answer
}

export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    correctAnswer: boolean,
    answer?: boolean
}

export interface QuestionsState {
    questions: Question[],
    correctQuestions: number,
    incorrectQuestions: number,
    progress: string,
    currentQuestion: number
}
