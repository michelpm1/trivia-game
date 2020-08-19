import { default as axios } from 'axios'
import {
    ApiGetQuestionsItem
} from './types'

const API_URL = 'https://opentdb.com/api.php';


const getTriviaQuestions = async (amount: string, difficulty: string, type: string) => {

    try {
        const response = await axios.get(`${API_URL}?amount=${amount}&difficulty=${difficulty}&type=${type}`);
        const result = response.data.results.map((questionItem: ApiGetQuestionsItem) => {
            return questionItem;
        });
        return result;
    } catch (error) {
        return error;
    }
}