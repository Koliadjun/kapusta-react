import React from 'react';

import styles from './Content.module.css';

export default function Content() {
  return (
    <div className={styles.wrapper}>
      <span className={styles.rectangle}></span>
      <p className={styles.text}>
        Привет! Для начала работы внеси текущий баланс своего счета!
      </p>
      <p className={styles.text}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
}
