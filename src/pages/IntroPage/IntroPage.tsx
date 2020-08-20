import * as React from 'react'
import { useDispatch } from 'react-redux'
import { startApp } from '../redux/actions'
import Layout from '../containers/layout';

const IntroPage = () => {
    const dispatch = useDispatch();
    return (
        <Layout>
            <h1>Welcome to the trivia challenge!</h1>
            <p>You will be presented with 10 True or False questions!</p>
            <p>Will you score 100%?</p>
            <button onClick={() => dispatch(startApp())}>Begin</button>
        </Layout>
    )
}

export default IntroPage