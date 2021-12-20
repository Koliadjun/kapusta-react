import React from 'react';

import styles from './BalanceLine.module.css';
import BalanceForm from './BalanceForm/BalanceForm';
import ReportButton from './ReportButton/ReportButton';

export default function BalanceLine({ balance, modal }) {
  return (
    <div className={styles.balanceLine}>
      {modal === false && (
        <div className={styles.line}>
          <BalanceForm balance={balance} />
          <ReportButton />
        </div>
      )}
    </div>
  );
}
