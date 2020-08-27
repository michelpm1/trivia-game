import {
  Question,
  QuestionActionTypes,
  START_QUESTIONS,
  QUESTIONS_LOADED,
  Answer,
  ANSWER_QUESTION,
  RESET_QUESTIONS,
} from '../types';

/**
 * When the API finishes loading we dispatch this action
 * to set the questions in the game's state
 * @param questions Array of questions
 */
export function questionsLoaded(questions: Question[]): QuestionActionTypes {
  return {
    type: QUESTIONS_LOADED,
    payload: { questions },
  };
}

export function startQuestions(): QuestionActionTypes {
  return {
    type: START_QUESTIONS,
  };
}

/**
 * Dispatch action for when the user answers a question.
 * @param answer The answer given by the user.
 */
export function answerQuestion(payload: Answer): QuestionActionTypes {
  return {
    type: ANSWER_QUESTION,
    payload,
  };
}

export function resetQuestions(): QuestionActionTypes {
  return {
    type: RESET_QUESTIONS,
  };
}
