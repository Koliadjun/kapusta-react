import React from 'react';
import LinesEllipsis from 'react-lines-ellipsis';
import data from '../Transactionslist/list.json';
import s from './transactionslist.module.css';
import svg from '../../images/svg/sprite.svg';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

export default function Transactionslist({ onDeleteClick }) {
  return (
    <div className={s.container}>
      <ul className={s.tableHeader}>
        <li className={s.tableHeaderItem}>Дата</li>
        <li className={s.tableHeaderItem}>Описание</li>
        <li className={s.tableHeaderItem}>Категория</li>
        <li className={s.tableHeaderItem}>Сумма</li>
      </ul>
      <SimpleBar className={s.scrollBar} style={{ maxHeight: 346 }}>
        <ul className={s.tablet}>
          {data.map(({ id, income, description, date, category, negative }) => (
            <li className={s.descriptionLi}>
              <span className={s.description}>{description}</span>
              <span className={s.data}>{date}</span>
              <span className={s.category}>{category}</span>
              <span
                className={s.sum}
                style={negative ? { color: 'red' } : { color: 'green' }}
              >
                {income}
              </span>
              <button
                className={s.button}
                type="button"
                onClick={() => {
                  onDeleteClick(id);
                }}
              >
                <svg className={s.svg} width="18" height="18">
                  <use href={`${svg}#icon-delete`} />
                </svg>
              </button>
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
