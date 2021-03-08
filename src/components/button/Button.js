import React from 'react';
import styles from '../button/Button.module.css';

const Button = ({onClick}) => {
  return (
    <button type="button" className={styles.Button} onClick={onClick} >
      Load more
    </button>
  );
};

export default Button;


