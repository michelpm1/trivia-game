export const LOAD_COMPLETE = 'LOAD_COMPLETE'
export const LOAD_ACTIVE = 'LOAD_ACTIVE'

interface LoadActiveAction {
    type: typeof LOAD_ACTIVE
}

interface LoadCompleteAction {
    type: typeof LOAD_COMPLETE
}

export interface LoadState {
    loading: boolean
}

export type LoadActionTypes = LoadActiveAction | LoadCompleteAction;

export interface ProgressState {
    status: QuestionsState,
    loading: boolean
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