import React from 'react';
import data from '../Transactionslist/list.json';
import { BsTrash } from 'react-icons/bs';
import s from './transactionslist.module.css';
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
        {data.map(({ id, name, email, phone }) => (
          <li key={id}>
            <span>{name}</span>
            <span>{email}</span>
            <span>{phone}</span>
            <span>{id}</span>
            <button
              className={s.button}
              type="button"
              onClick={() => {
                onDeleteClick(id);
              }}
            >
              <BsTrash />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
