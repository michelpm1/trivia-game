import React from 'react'
import ReactLoading from 'react-loading'
import styles from './defaultLoading.module.css'

const DefaultLoading = () => (
    <div className={styles.defaultLoading}>
        <ReactLoading type={'spokes'} color={'black'} height={200} width={100} />
    </div>
);

export default DefaultLoading;