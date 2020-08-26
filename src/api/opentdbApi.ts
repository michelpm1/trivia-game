/* eslint-disable no-shadow */
import axios from 'axios';
import parser from 'html-react-parser';
import { ApiGetQuestionsItem } from './types';

const API_URL = 'https://opentdb.com/api.php';

// eslint-disable-next-line import/prefer-default-export
export const getTriviaQuestions = async (
  amount: number,
  difficulty: string,
  type: string
) => {
  try {
    const response = await axios.get(
      `${API_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`
    );
    const result = response.data.results.map(
      (questionItem: ApiGetQuestionsItem) => {
        const {
          category,
          type,
          difficulty,
          question,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          correct_answer,
        } = questionItem;

        return {
          category,
          type,
          difficulty,
          question: parser(question),
          correctAnswer: correct_answer === 'True',
        };
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};
