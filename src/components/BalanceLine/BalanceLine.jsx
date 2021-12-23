import React from 'react';

import styles from './BalanceLine.module.css';
import BalanceForm from './BalanceForm/BalanceForm';
import ReportButton from './ReportButton/ReportButton';
import BackHomeButton from './BackHomeButton/BackHomeButton';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import { useSelector } from 'react-redux';

export default function BalanceLine({ name }) {
  const modal = !useSelector(state => state.auth.user.balanceIsSet);
  const balance = useSelector(state => state.auth.user.initialBalance);
  return (
    <div className={styles.balanceLine}>
      {modal === false && (
        <div className={styles.line}>
          {name === 'report' && <BackHomeButton />}
          <BalanceForm balance={balance} />
          {name === 'main' && <ReportButton />}
          {name === 'report' && <CurrentPeriod />}
        </div>
      )}
    </div>
  );
}
