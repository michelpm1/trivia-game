import * as React from 'react';
import { useSelector } from 'react-redux';
import DefaultLoading from '../components/DefaultLoading/DefaultLoading';
import { ProgressState } from '../redux/types';
import styles from './Layout.module.css';

interface LayoutProps {
  children: any;
}

const Layout = (props: LayoutProps) => {
  const isLoading = useSelector((state: ProgressState) => {
    return state.load.loading;
  });
  return (
    <div className={styles.container}>
      {isLoading && <DefaultLoading />}
      {props.children}
    </div>
  );
};

export default Layout;
