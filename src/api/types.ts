
/**
 * the structure of the questions as seen in the API response
 */
export interface ApiGetQuestionsItem {
  category: string;
  type: string;
  difficulty: string;
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}
