
import React from "react"
import s from './CategoryList.module.css'

import sprite from '../../../images/svg/icon.svg';
import trans from '../CategoryData/categoriesCoasts.json'

const CategoryCoast = () => {
    // console.log(trans);
    // console.log(trans.category);
    // const handleClick = category => {
    // dispatch(transactionsReducer.addCurrentCategory(category));
//   };
    return (
      <ul className={s.categoryList}>
      {trans?.length === 0 ? (
        <li className={s.noData}>За данный период транзакций нет</li>
      ) : (
        trans?.map(item => (
          <li
            key={item.id}
            className={s.categoryItem}
            // onClick={() => handleClick(item.category)}
          >
            <p className={s.costs}>{item.costs}</p>

            <svg className={s.icon}>
              <use
                className={s.useSvg}
                xlinkHref={`${sprite}#${item.images}`}
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