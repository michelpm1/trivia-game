import React from 'react';
import ReactLoading from 'react-loading';
import styles from './DefaultLoading.module.css';

/**
 * Full screen loading
*/
const DefaultLoading = () => (
  <div className={styles.defaultLoading}>
    <ReactLoading type='spokes' color='black' height={200} width={100} />
  </div>
);

export default DefaultLoading;
