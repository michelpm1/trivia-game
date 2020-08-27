import * as React from 'react';
import { Question } from '../../redux/types';
import styles from './ResultItem.module.css';

const ResultItem = (props: Question) => {
  const isAnswerCorrect = props.correctAnswer === props.answer;
  return (
    <li className={styles.listItem}>
      <span className={styles.answerResult}>
        <div
          className={
            isAnswerCorrect ? styles.correctAnswer : styles.wrongAnswer
          }
        >
          {isAnswerCorrect ? '+' : '-'}
        </div>
      </span>
      <div className={styles.questionText}>
        <span>{props.question}</span>
      </div>
    </li>
  );
};

export default ResultItem;
