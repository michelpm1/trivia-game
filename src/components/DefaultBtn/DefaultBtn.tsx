import React from 'react';
import styles from './DefaultBtn.module.css';

interface DefaultBtnProps {
  /* eslint-disable-next-line */
  handleFunction: Function;
  buttonText: string;
}

const handleOnClick = (props: DefaultBtnProps) => {
  return props.handleFunction();
};
const DefaultBtnProps = (props: DefaultBtnProps) => (
  <button type="button" className={styles.defaultBtn} onClick={() => handleOnClick(props)}>
    {props.buttonText}
  </button>
);

export default DefaultBtnProps;
