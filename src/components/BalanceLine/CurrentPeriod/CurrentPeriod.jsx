import React from 'react';

import styles from './CurrentPeriod.module.css';
import { ReactComponent as ArrowLeftIcon } from '../../../images/svg/vector-left.svg';
import { ReactComponent as ArrowRightIcon } from '../../../images/svg/vector-right.svg';
import { useSelector, useDispatch } from 'react-redux';
export default function CurrentPeriod() {
  const date = useSelector(state => state.transaction.date);
  console.log(`report`, date);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

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

  function onClickLeft() {
    // dispatch(transactionOperations.setDate(UpdateDate));
  }
  function onClickRight() {}

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
