import * as React from 'react';
import { Question } from '../../redux/types';
import { default as ResultItem } from '../ResultItem/ResultItem';

export interface ResultListProps {

    entries: Question[];
}

const ResultList = (props: ResultListProps) =>
    <div>
        <ul>
            {props.entries.map((entry: Question, index: number) => <ResultItem key={index} {...entry} />)}
        </ul>
    </div>;

export default ResultList;
