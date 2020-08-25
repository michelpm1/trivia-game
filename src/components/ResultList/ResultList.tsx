import * as React from 'react';
import { Question } from '../../redux/types';
import { default as ResultItem } from '../ResultItem/ResultItem';
import styles from './ResultList.module.css';
export interface ResultListProps {

    entries: Question[];
}

const ResultList = (props: ResultListProps) =>
    <div className={styles.listBox}>
        <ul className={styles.list}>
            {props.entries.map((entry: Question, index: number) => <ResultItem key={index} {...entry} />)}
        </ul>
    </div>;

export default ResultList;
