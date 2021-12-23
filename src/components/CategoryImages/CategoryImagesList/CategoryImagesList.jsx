import Rechart from 'components/Rechart/Rechart';
import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { transactionSelectors } from 'redux/transaction';
import CategoryCoast from '../CategoryData/CategoryCoast';
import CategoryIncome from '../CategoryData/CategoryIncome';
import s from './CategoryImagesList.module.css';

const CategoryImagesList = () => {
  const [typeTrans, setTypeTrans] = useState('expenses');

  const handleClick = () => {
    if (typeTrans === 'incoming') {
      setTypeTrans('expenses');
    }
    if (typeTrans === 'expenses') {
      setTypeTrans('incoming');
    }
  };
  const year = useSelector(transactionSelectors.getCurrentYear);
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const coast = useSelector(
    transactionSelectors.getSpendReportDataPerMonth(month, year),
  );
  const income = useSelector(
    transactionSelectors.getIncomeReportDataPerMonth(month, year),
  );
  return (
    <div className={s.listWrapper}>
      <div className={s.wrapper}>
        <button
          className={s.btnLeft}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
        </button>
        {typeTrans === 'expenses' ? (
          <p className={s.title}> Расходы </p>
        ) : (
          <p className={s.title}> Доходы </p>
        )}
        <button
          className={s.btnRight}
          type="button"
          onClick={() => handleClick()}
        >
          <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
        </button>
      </div>
      <div>
        {typeTrans === 'expenses' ? (
          <>
            <CategoryCoast />
            <Rechart itemsArray={coast} />
          </>
        ) : (
          <>
            <CategoryIncome />
            <Rechart itemsArray={income} />
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryImagesList;
