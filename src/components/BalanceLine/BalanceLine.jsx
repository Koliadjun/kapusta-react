import React from 'react';

import styles from './BalanceLine.module.css';
import BalanceForm from './BalanceForm/BalanceForm';
import ReportButton from './ReportButton/ReportButton';
import BackHomeButton from './BackHomeButton/BackHomeButton';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';
import { useSelector } from 'react-redux';
import Datepicker from 'components/DatePicker/Datepicker';

export default function BalanceLine({ name }) {
  // const modal = !useSelector(state => state.auth.user.balanceIsSet);
  const modal = false;
  const balance = useSelector(state => state.auth.user.initialBalance) + 100500;
  return (
    <div className={styles.balanceLine}>
      {modal === false && (
        <div className={styles.line}>
          {name === 'report' && <BackHomeButton />}
          <BalanceForm balance={balance} />
          {name === 'main' && <ReportButton />}
          {name === 'report' && <CurrentPeriod />}
          <div className={styles.datepicker} style={{ marginTop: 40 }}>
            <Datepicker />
          </div>
        </div>
      )}
    </div>
  );
}
