import * as React from 'react';
import { Question } from '../../redux/types';
import styles from './ResultItem.module.css';
const ResultItem = (props: Question) => {
    const isAnswerCorrect = props.correctAnswer === props.answer;
    debugger;
    return (
        <li>
            <span>
                <div className={isAnswerCorrect ? styles.correctAnswer : styles.wrongAnswer}>
                    {isAnswerCorrect ? '+' : '-'}</div>
            </span>
            <div>
                <span>{props.question}</span>
            </div>
        </li>
    )
}

export default ResultItem;
