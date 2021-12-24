import React from 'react';
// import data from '../Transactionslist/list.json';
import svg from '../../images/svg/sprite.svg';
import SimpleBar from 'simplebar-react';
import s from './transactionslist.module.css';
import { useDispatch } from 'react-redux';
import { transactionOperations } from 'redux/transaction';

export default function Transactionslist({ data }) {
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <ul className={s.tableHeader}>
        <li className={s.tableHeaderItem}>Дата</li>
        <li className={s.tableHeaderItem}>Описание</li>
        <li className={(s.tableHeaderItem, s.categogyHead)}>Категория</li>
        <li className={(s.tableHeaderItem, s.sumHead)}>Сумма</li>
      </ul>

      <SimpleBar className={s.scrollBar} style={{ maxHeight: 346 }}>
        <ul className={s.tablet}>
          {data.map(({ _id, sum, description, date, category, negative }) => (
            <li key={_id} className={s.tabletItem}>
              <span className={s.description}>{description}</span>
              <span className={s.data}>{date}</span>
              <span className={s.category}>{category}</span>
              <div className={s.sumWrapper}>
                <span
                  className={s.sum}
                  style={negative ? { color: 'red' } : { color: 'green' }}
                >
                  {sum} грн
                </span>
                <button
                  className={s.button}
                  type="button"
                  onClick={() => {
                    dispatch(transactionOperations.removeOneTransaction(_id));
                  }}
                >
                  <svg className={s.svg} width="18" height="18">
                    <use href={`${svg}#icon-delete`} />
                  </svg>
                </button>
              </div>
            </li>
            // <li className={s.tabletItem} key={id}>
            //   <div className={s.wrapperDescDataCategory}>
            //     <div className={s.revers}>
            //       <span className={s.description}>{description}</span>
            //       <span className={s.data}>{email}</span>
            //     </div>
            //     <div className={s.wrapperDatCategory}>
            //       <span className={s.category}>{phone}</span>
            //     </div>
            //   </div>
            //   <div className={s.wrapperSumBtn}>
            //     <span
            //       className={s.sum}
            //       style={negative ? { color: 'red' } : { color: 'green' }}
            //     >
            //       {income}
            //     </span>
            //     <button
            //       className={s.button}
            //       type="button"
            //       onClick={() => {
            //         onDeleteClick(id);
            //       }}
            //     >
            //       <svg className={s.svg} width="18" height="18">
            //         <use href={`${svg}#icon-delete`} />
            //       </svg>
            //     </button>
            //   </div>
            // </li>
          ))}
        </ul>
      </SimpleBar>
    </div>
  );
}

// <ul>

// </ul>;
