import React from 'react';
import data from '../Transactionslist/list.json';
import s from './transactionslist.module.css';
import svg from '../../images/svg/sprite.svg';

console.log(data);

export default function Transactionslist({ onDeleteClick }) {
  return (
    <div className={s.container}>
      <ul className={s.tableHeader}>
        <li className={s.tableHeaderItem}>Дата</li>
        <li className={s.tableHeaderItem}>Описание</li>
        <li className={s.tableHeaderItem}>Категория</li>
        <li className={s.tableHeaderItem}>Сумма</li>
      </ul>
      <ul className={s.tablet}>
        {data.map(({ id, income, description, email, phone, negative }) => (
          <li className={s.tabletItem} key={id}>
            <div className={s.wrapperDescDataCategory}>
              <div className={s.revers}>
                <span className={s.description}>{description}</span>
                <span className={s.data}>{email}</span>
              </div>
              <div className={s.wrapperDatCategory}>
                <span className={s.category}>{phone}</span>
              </div>
            </div>
            <div className={s.wrapperSumBtn}>
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
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
