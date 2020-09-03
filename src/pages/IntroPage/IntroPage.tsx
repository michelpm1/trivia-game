import * as React from 'react';
import { useDispatch } from 'react-redux';
import { startApp } from '../../redux/actions';
import Layout from '../../containers/Layout';
import styles from './IntroPage.module.css';
import DefaultBtn from '../../components/DefaultBtn/DefaultBtn';

const IntroPage = () => {
  const dispatch = useDispatch();

  return (
    <Layout>
      <h1 className={styles.title}>Welcome to the trivia challenge!</h1>
      <p className={styles.defaultText}>
        You will be presented with 10 True or False questions!
      </p>
      <p className={styles.defaultText}>Will you score 100%?</p>
      <div className={styles.buttonBox}>
        <DefaultBtn
          handleFunction={() => dispatch(startApp())}
          buttonText="Begin"
        />
      </div>
    </Layout>
  );
};

export default IntroPage;
