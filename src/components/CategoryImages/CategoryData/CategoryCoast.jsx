import React from 'react';
import s from './CategoryList.module.css';

import { useSelector } from 'react-redux';
import shortid from 'shortid';
import sprite from '../../../images/svg/icon.svg';
// import trans from '../CategoryData/categoriesCoasts.json'
import { transactionSelectors } from '../../../redux/transaction';

const CategoryCoast = () => {
  const year = useSelector(transactionSelectors.getCurrentYear);
  const month = useSelector(transactionSelectors.getCurrentMonth);
  const coast = useSelector(
    transactionSelectors.getSpendReportDataPerMonth(month, year),
  );

  return (
    <ul className={s.categoryList}>
      {coast.length === 0 ? (
        <p className={s.noData}>За данный период транзакций нет</p>
      ) : (
        coast.map(item => (
          <li key={shortid.generate()} className={s.categoryItem}>
            <p className={s.costs}>{item.value}</p>

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

export default CategoryCoast;
