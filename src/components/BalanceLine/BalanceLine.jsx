import React from 'react';

import styles from './BalanceLine.module.css';
import BalanceForm from './BalanceForm/BalanceForm';
import ReportButton from './ReportButton/ReportButton';
import BackHomeButton from './BackHomeButton/BackHomeButton';

export default function BalanceLine({ balance, modal, name }) {
  return (
    <div className={styles.balanceLine}>
      {modal === false && (
        <div className={styles.line}>
          {name === 'report' && <BackHomeButton />}
          <BalanceForm balance={balance} />
          {name === 'main' && <ReportButton />}
        </div>
      )}
    </div>
  );
}
