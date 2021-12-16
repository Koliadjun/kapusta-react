import React from 'react';

import styles from './BalanceForm.module.css';

export default function BalanceForm({ balance }) {
  return (
    <div className={styles.form}>
      <div className={styles.label}>Баланс:</div>
      <div className={styles.input} name="balanceInput">
        {balance} UAH
      </div>
      <div className={styles.button__balance}>ПОДТВЕРДИТЬ</div>
    </div>
  );
}
