
import React from "react"
import s from './CategoryList.module.css'

import {  useSelector } from 'react-redux';

import sprite from '../../../images/svg/icon.svg';
// import trans from '../CategoryData/categoriesCoasts.json'
import {transactionSelectors} from '../../../redux/transaction'


const CategoryCoast = ({ year, month }) => {
  const coast = useSelector(transactionSelectors.getSpendReportDataPerMonth( { year, month }))
   return (
      <ul className={s.categoryList}>
      {coast?.length === 0 ? (
        <li className={s.noData}>За данный период транзакций нет</li>
      ) : (
        coast?.map(item => (
          <li
            key={item.id}
            className={s.categoryItem}
           
          >
            <p className={s.costs}>{item.sum}</p>

            <svg className={s.icon}>
              <use
                className={s.useSvg}
                xlinkHref={`${sprite}#${item.category}`}
              />
            </svg>

            <h3 className={s.price}>{item.category}</h3>
          </li>
        ))
      )}
    </ul>
    )

}

export default CategoryCoast