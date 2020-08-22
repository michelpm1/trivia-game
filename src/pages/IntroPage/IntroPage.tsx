import * as React from 'react'
import { useDispatch } from 'react-redux'
import { startApp } from '../../redux/actions'
import Layout from '../../containers/layout'
import styles from './IntroPage.module.css'
const IntroPage = () => {
    const dispatch = useDispatch();
    return (
        <Layout>
            <h1 className={styles.title}>Welcome to the trivia challenge!</h1>
            <p className={styles.firstText}>You will be presented with 10 True or False questions!</p>
            <p className={styles.secondText}>Will you score 100%?</p>
            <div className={styles.buttonBox}>
                <button onClick={() => dispatch(startApp())}>Begin</button>
            </div>
        </Layout>
    )
}

export default IntroPage