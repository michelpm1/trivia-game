import * as React from 'react';
import styles from './QuestionTypeBox.module.css';

interface QuestionProps {
  /**
   * String with the question text
   */
  children: string;
}

const QuestionTypeBox = (props: QuestionProps) => {
  return (
    <div className={styles.questionBox}>
      <span className={styles.questionBoxText}>
        {' '}
        {props.children}
      </span>
    </div>
  );
};

export default QuestionTypeBox;
