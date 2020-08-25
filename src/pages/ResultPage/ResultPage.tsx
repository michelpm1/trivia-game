import * as React from 'react';
import { useSelector } from 'react-redux';
import { ProgressState, Question } from '../../redux/types';
import ResultList from '../../components/ResultList/ResultList';
import Layout from '../../containers/Layout';

const ResultsPage = () => {
    const questions: Question[] = useSelector((state: ProgressState) => state.status.questions);
    const correctAQuestions: number = useSelector((state: ProgressState) => state.status.correctQuestions);
    return (
        <Layout>
            <h1>You scored {correctAQuestions}/{questions.length}</h1>
            <ResultList entries={questions} />
        </Layout>
    )
}

export default ResultsPage