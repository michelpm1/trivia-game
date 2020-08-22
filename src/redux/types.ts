
export const LOAD_COMPLETE = 'LOAD_COMPLETE'
export const LOAD_ACTIVE = 'LOAD_ACTIVE'

export const START_QUESTIONS = 'START_QUESTIONS'
export const QUESTIONS_LOADED = 'QUESTIONS_LOADED'
interface LoadActiveAction {
    type: typeof LOAD_ACTIVE
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

export type QuestionActionTypes = StartQuestionsAction | QuestionsLoaded


export type LoadActionTypes = LoadActiveAction | LoadCompleteAction;

export interface ProgressState {
    status: QuestionsState,
    load: LoadState
}

export interface Question {
    category: string,
    type: string,
    difficulty: string,
    question: string,
    rightAnswer: boolean,
    answer?: boolean
}

export interface QuestionsState {
    questions: Question[],
    correctQuestions: number,
    incorrectQuestions: number,
    progress: string
}
