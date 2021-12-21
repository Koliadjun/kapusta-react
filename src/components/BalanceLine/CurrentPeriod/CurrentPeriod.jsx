import React from 'react';

import styles from './CurrentPeriod.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';

export default function CurrentPeriod({ month, setMonth, year, setYear }) {
  const months = {
    1: 'январь',
    2: 'февраль',
    3: 'март',
    4: 'апрель',
    5: 'май',
    6: 'июнь',
    7: 'июль',
    8: 'август',
    9: 'сентябрь',
    10: 'октябрь',
    11: 'ноябрь',
    12: 'декабрь',
  };
  console.log('report', month);

  function onClickLeft(month, setMonth, year, setYear) {
    if (month <= 1) {
      setMonth(12);
      setYear(prev => (prev -= 1));
    } else {
      setMonth(prev => (prev -= 1));
    }
  }
  function onClickRight(month, setMonth, year, setYear) {
    if (month < 12) {
      setMonth(month => (month += 1));
    } else {
      setMonth(1);
      setYear(year => (year += 1));
    }
  }

  return (
    <div>
      <span className={styles.label}>Текущий период:</span>
      <div className={styles.wrapper}>
        <ArrowLeftIcon className={styles.icon} onClick={onClickLeft} />

        <div className={styles.data}>
          {months[month]} {year}
          {/* {month}.{year} */}
        </div>
        <ArrowRightIcon className={styles.icon} onClick={onClickRight} />
      </div>
    </div>
  );
}
