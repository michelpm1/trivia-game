import reducers from './reducers';
import { answerQuestion } from './actions';
import { QuestionsState, Question } from '../types';
import { STATUS_STARTED, STATUS_FINISHED } from '../../constants';


function* mockQuestion(): Iterator<Question> {
    let i = 0;
    let answer = true;

    while (true) {
        yield (
            {
                category: 'Test Question',
                type: 'test',
                difficulty: 'easy',
                question: `Question ${i}`,
                correctAnswer: answer,
            }
        )
        answer = !answer
        i += 1
    }
}

test('Should update question state for ANSWER_QUESTION dispatch', () => {

    const getTriviaQuestions = mockQuestion();
    const initialState: QuestionsState = {
        progress: STATUS_STARTED,
        currentQuestion: 1,
        questions: [getTriviaQuestions.next().value],
        correctQuestions: 0,
        incorrectQuestions: 0
    }

    const state = initialState;

    const actual = reducers(
        state,
        answerQuestion({ answer: true, questionNumber: 1 })
    )

    expect(actual).toEqual({
        progress: STATUS_STARTED,
        currentQuestion: 2,
        questions: [
            state.questions[0]
        ],
        correctQuestions: 1,
        incorrectQuestions: 0
    })
})

test('Should change progress to finished when answer 10 questions', () => {
    const getTriviaQuestions = mockQuestion();
    const initialState: QuestionsState = {
        progress: STATUS_STARTED,
        currentQuestion: 1,
        questions: [],
        correctQuestions: 0,
        incorrectQuestions: 0
    }

    let state = initialState;
    let actual = state;
    state.questions = Array(10).fill(10).map(() => getTriviaQuestions.next().value);

    for (let i = 1; i < 11; i++) {
        actual = reducers(
            actual,
            answerQuestion({ answer: true, questionNumber: i })
        )
    }
    expect(actual.progress).toEqual(STATUS_FINISHED);
});