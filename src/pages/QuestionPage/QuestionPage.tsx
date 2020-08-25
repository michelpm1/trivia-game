import { default as React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import QuestionTypeBox from '../../components/QuestionTypeBox/QuestionTypeBox';
import { ProgressState, Answer } from '../../redux/types';
import { answerQuestion } from '../../redux/actions';
import Layout from '../../containers/Layout';
import styles from './QuestionPage.module.css';
import DefaultBtn from '../../components/DefaultBtn/DefaultBtn';

const QuestionPage = () => {
    const dispatch = useDispatch();

    const handleResponse = (payload: Answer) => {
        dispatch(answerQuestion(payload));
    }

    const actualQuestion = useSelector((state: ProgressState) => state.status.questions[state.status.currentQuestion - 1]);
    const currentQuestionNumber = useSelector((state: ProgressState) => state.status.currentQuestion);

    return (
        <Layout>
            <h1 className={styles.questionPageTittle}>{actualQuestion.category}</h1>
            <p className={styles.texActuaLQuestion}>{currentQuestionNumber}/10</p>

            <QuestionTypeBox>
                {actualQuestion.question}
            </QuestionTypeBox>
            <div className={styles.buttonBox}>
                <DefaultBtn buttonText={'Correct'} handleFunction={() => handleResponse({ answer: true, questionNumber: currentQuestionNumber })} />
                <DefaultBtn buttonText={'Wrong'} handleFunction={() => handleResponse({ answer: false, questionNumber: currentQuestionNumber })} />
            </div>
        </Layout>
    )
}

export default QuestionPage