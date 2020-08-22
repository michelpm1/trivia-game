import * as React from 'react';
import DefaultLoading from '../components/defaultLoading/defaultLoading';
import { useSelector } from 'react-redux';
import { ProgressState } from '../redux/types';
import styles from './layout.module.css';
interface LayoutProps {
    children: any
}

const Layout = (props: LayoutProps) => {
    const isLoading = useSelector((state: ProgressState) => {
        return state.load.loading;
    }

    )
    return <div className={styles.container}>
        {isLoading && <DefaultLoading />}
        {props.children}
    </div>
}

export default Layout
