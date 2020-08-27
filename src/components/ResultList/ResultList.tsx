/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { Question } from '../../redux/types';
import ResultItem from '../ResultItem/ResultItem';
import styles from './ResultList.module.css';

export interface ResultListProps {
  /**
   * List of questions wrapped by the ResultList component.
   */
  entries: Question[];
}

const ResultList = (props: ResultListProps) => (
  <div className={styles.listBox}>
    <ul className={styles.list}>
      {props.entries.map((entry: Question, i: number) => (
        <ResultItem key={i} {...entry} />
      ))}
    </ul>
  </div>
);

export default ResultList;
