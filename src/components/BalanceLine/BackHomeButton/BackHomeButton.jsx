import React from 'react';
import { Link } from 'react-router-dom';

import styles from './BackHomeButton.module.css';
import { ReactComponent as BackHomeIcon } from '../../../images/svg/arrow-left.svg';

export default function BackHomeButton() {
  return (
    <div className={styles.button}>
      <Link className={styles.link} to="/">
        <BackHomeIcon className={styles.icon} />
        <span className={styles.buttonName}>Вернуться на главную</span>
      </Link>
    </div>
  );
}
