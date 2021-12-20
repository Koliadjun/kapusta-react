
import React from "react"
import s from './CategoryList.module.css'

// import sprite from '../../images/svg/icon.svg';
import trans from '../../components/CategoryImages/categoriesCoasts.json'

const CategoryCoast = () => {
    // console.log(trans);
    // console.log(trans.category);
    // const handleClick = category => {
    // dispatch(transactionsReducer.addCurrentCategory(category));
//   };
    return (
      <ul className={s.list}>
      {trans?.length === 0 ? (
        <li className={s.transEmpty}>За данный период транзакций нет</li>
      ) : (
        trans?.map(trans => (
          <li
            key={trans.id}
            className={s.item}
            // onClick={() => handleClick(item.category)}
          >
            <p className={s.price}>{trans.costs}</p>

            <svg className={s.icon}>
              <use
                className={s.useSvg}
                xlinkHref={trans.images}
              />
            </svg>

            <h3 className={s.price}>{trans.category}</h3>
          </li>
        ))
      )}
    </ul>
    )

}

export default CategoryCoast