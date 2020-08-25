import { default as axios } from 'axios'
import {
    ApiGetQuestionsItem
} from './types'
import { default as parser } from 'html-react-parser'

const API_URL = 'https://opentdb.com/api.php';


export const getTriviaQuestions = async (amount: number, difficulty: string, type: string) => {

    try {
        const response = await axios.get(`${API_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`);
        const result = response.data.results.map((questionItem: ApiGetQuestionsItem) => {
            const {
                category,
                type,
                difficulty,
                question,
                correct_answer,
            } = questionItem;

            return {
                category,
                type,
                difficulty,
                question: parser(question),
                correctAnswer: correct_answer === 'True',
            }
        });
        return result;
    } catch (error) {
        return error;
    }
}