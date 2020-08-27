import React from 'react';
import styles from './DefaultBtn.module.css';

interface DefaultBtnProps {
  /**
   * Handler function to be sent to the button
   */
  /* eslint-disable-next-line */
  handleFunction: Function;
  /**
   * Button Text
   */
  buttonText: string;
}

/**
 * A handler fuction the function to be sent to the button
 * @param props the button props 
 */
const handleOnClick = (props: DefaultBtnProps) => {
  return props.handleFunction();
};
const DefaultBtn = (props: DefaultBtnProps) => (
  <button type="button" className={styles.defaultBtn} onClick={() => handleOnClick(props)}>
    {props.buttonText}
  </button>
);

export default DefaultBtn;
