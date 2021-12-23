import React from 'react';
import s from './CategoryList.module.css';

import { useSelector } from 'react-redux';

import sprite from '../../../images/svg/icon.svg';
import { transactionSelectors } from '../../../redux/transaction';
import shortid from 'shortid';

const CategoryIncome = () => {
  const year = useSelector(transactionSelectors.getCurrentYear);
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const income = useSelector(
    transactionSelectors.getIncomeReportDataPerMonth(month, year),
  );

  // console.log(year);
  // console.log(`income`, income);
  return (
    <ul className={s.categoryList}>
      {income.length === 0 ? (
        <li className={s.noData}>За данный период транзакций нет</li>
      ) : (
        income.map(item => (
          <li key={shortid.generate()} className={s.categoryItem}>
            <p className={s.costs}>{item.sum}</p>

            <svg className={s.icon}>
              <use className={s.useSvg} xlinkHref={`${sprite}#${item.name}`} />
            </svg>

            <h3 className={s.price}>{item.name}</h3>
          </li>
        ))
      )}
    </ul>
  );
};

export default CategoryIncome;
