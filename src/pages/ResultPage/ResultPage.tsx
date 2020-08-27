import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ProgressState, Question } from '../../redux/types';
import ResultList from '../../components/ResultList/ResultList';
import Layout from '../../containers/Layout';
import styles from './ResultPage.module.css';
import DefaultBtn from '../../components/DefaultBtn/DefaultBtn';
import { resetQuestions, loadActive, loadComplete } from '../../redux/actions';

const ResultsPage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(loadActive());
    // Added this timeout to improve UI usability, avoiding instant redirect
    setTimeout(() => {
      dispatch(loadComplete());
      dispatch(resetQuestions());
    }, 500);
  };

  const questions: Question[] = useSelector(
    (state: ProgressState) => state.status.questions
  );
  const correctAQuestions: number = useSelector(
    (state: ProgressState) => state.status.correctQuestions
  );
  return (
    <Layout>
      <h1 className={styles.scoreText}>
        You scored
        {' '}
        {correctAQuestions}
        /
        {questions.length}
      </h1>
      <ResultList entries={questions} />
      <div className={styles.playAgainBtnBox}>
        <DefaultBtn
          buttonText="PLAY AGAIN?"
          handleFunction={() => handleClick()}
        />
      </div>
    </Layout>
  );
};

export default ResultsPage;