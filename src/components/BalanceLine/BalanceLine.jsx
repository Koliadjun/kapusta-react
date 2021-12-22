import React from 'react';

import styles from './BalanceLine.module.css';
import BalanceForm from './BalanceForm/BalanceForm';
import ReportButton from './ReportButton/ReportButton';
import BackHomeButton from './BackHomeButton/BackHomeButton';
import CurrentPeriod from './CurrentPeriod/CurrentPeriod';

export default function BalanceLine({
  balance,
  modal,
  name,
  month,
  setMonth,
  year,
  setYear,
}) {
  return (
    <div className={styles.balanceLine}>
      {modal === false && (
        <div className={styles.line}>
          {name === 'report' && <BackHomeButton />}
          <BalanceForm balance={balance} />
          {name === 'main' && <ReportButton />}
          {name === 'report' && (
            <CurrentPeriod
              month={month}
              setMonth={setMonth}
              year={year}
              setYear={setYear}
            />
          )}
        </div>
      )}
    </div>
  );
}
