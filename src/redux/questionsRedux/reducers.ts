import {
  QuestionsState,
  QuestionActionTypes,
  START_QUESTIONS,
  QUESTIONS_LOADED,
  ANSWER_QUESTION,
  RESET_QUESTIONS,
} from '../types';
import { STATUS_STARTED, STATUS_FINISHED, STATUS_INTRO } from '../../constants';

const initialState: QuestionsState = {
  questions: [],
  correctQuestions: 0,
  incorrectQuestions: 0,
  progress: STATUS_INTRO,
  currentQuestion: 1,
};

/**
 * Manage the question's state
 * @param state Current game state
 * @param action Dispatch action
 */
const questionsReducer = (
  state = initialState,
  action: QuestionActionTypes
): QuestionsState => {
  switch (action.type) {
    case START_QUESTIONS: {
      return {
        ...state,
        progress: STATUS_STARTED,
      };
    }

    case RESET_QUESTIONS: {
      return initialState;
    }

    case QUESTIONS_LOADED: {
      return {
        ...state,
        questions: action.payload.questions,
      };
    }

    case ANSWER_QUESTION: {
      const {
        payload: { answer, questionNumber },
      } = action;

      const isCorrect =
        state.questions[questionNumber - 1].correctAnswer === answer;

      const questions = [...state.questions];
      questions[state.currentQuestion - 1].answer = answer;

      let resultQuestions = {};

      if (isCorrect) {
        resultQuestions = {
          correctQuestions: state.correctQuestions + 1,
        };
      } else {
        resultQuestions = {
          incorrectQuestions: state.incorrectQuestions + 1,
        };
      }

      return state.currentQuestion !== 10
        ? {
          ...state,
          ...resultQuestions,
          currentQuestion: state.currentQuestion + 1,
          questions,
        }
        : {
          ...state,
          ...resultQuestions,
          questions,
          progress: STATUS_FINISHED,
        };
    }
    default: {
      return state;
    }
  }
};

export default questionsReducer;
