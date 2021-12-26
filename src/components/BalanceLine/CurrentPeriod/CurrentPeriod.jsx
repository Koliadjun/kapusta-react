import React, { useState } from 'react';

import styles from './CurrentPeriod.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import { useSelector, useDispatch } from 'react-redux';
import { transactionOperations } from 'redux/transaction';
export default function CurrentPeriod() {
  const dispatch = useDispatch();
  const date = useSelector(state => state.transaction.date);
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedYear, setSelectedYear] = useState(year);

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

  const onClickRight = () => {
    if (selectedMonth < 12) {
      setSelectedMonth(prev => (prev += 1));
    } else {
      setSelectedMonth(1);
      setSelectedYear(prev => (prev += 1));
    }
    dispatch(
      transactionOperations.setDate(new Date(selectedYear, selectedMonth, day)),
    );
  };

  const onClickLeft = () => {
    if (selectedMonth <= 1) {
      setSelectedMonth(12);
      setSelectedYear(prev => (prev -= 1));
    } else {
      setSelectedMonth(prev => (prev -= 1));
    }
    dispatch(
      transactionOperations.setDate(new Date(selectedYear, selectedMonth, day)),
    );
  };

  return (
    <div className={styles.container}>
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
