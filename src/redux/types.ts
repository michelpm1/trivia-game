export const LOAD_COMPLETE = 'LOAD_COMPLETE';
export const LOAD_ACTIVE = 'LOAD_ACTIVE';

export const START_QUESTIONS = 'START_QUESTIONS';
export const QUESTIONS_LOADED = 'QUESTIONS_LOADED';
export const ANSWER_QUESTION = 'ANSWER_QUESTIONS';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';

interface LoadActiveAction {
  type: typeof LOAD_ACTIVE;
}

export interface Answer {
  answer: boolean;
  questionNumber: number;
}

interface LoadCompleteAction {
  type: typeof LOAD_COMPLETE;
}

export interface LoadState {
  loading: boolean;
}

export interface ApiResponse {
  questions: Question[];
}

interface StartQuestionsAction {
  type: typeof START_QUESTIONS;
}

interface QuestionsLoaded {
  type: typeof QUESTIONS_LOADED;
  payload: ApiResponse;
}

export type QuestionActionTypes =
  | StartQuestionsAction
  | QuestionsLoaded
  | AnswerQuestionAction
  | ResetQuestionAction;

export type LoadActionTypes = LoadActiveAction | LoadCompleteAction;

export interface ProgressState {
  status: QuestionsState;
  load: LoadState;
}

interface AnswerQuestionAction {
  type: typeof ANSWER_QUESTION;
  payload: Answer;
}

interface ResetQuestionAction {
  type: typeof RESET_QUESTIONS;
}

export interface Question {
  /**
   * Category of the question
   */
  category: string;
  /**
   * Type of the question
   */
  type: string;
  /**
   * Level of difficulty of the question
   */
  difficulty: string;
  /**
   * Text with the question
   */
  question: string;
  /**
   * Response for the question
   */
  correctAnswer: boolean;
  /**
   * Response for the answer
   */
  answer?: boolean;
}

export interface QuestionsState {
  /**
   * List of questions
   */
  questions: Question[];
  /**
   * Total correct questions
   */
  correctQuestions: number;
  /**
   * Total incorrect questions
   */
  incorrectQuestions: number;
  /**
   * Progress in the application (Started, Finished, Intro) necessary for the router to redirect
   */
  progress: string;
  /**
   * Actual question user is answering
   */
  currentQuestion: number;
}
