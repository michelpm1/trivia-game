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