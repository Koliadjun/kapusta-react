import React, { useState } from 'react';
import list from './list.json';
import s from './styles.module.css';

export default function CategoryList() {
  const [category, setCategory] = useState('');

  const handlerChange = event => {
    event.preventDefault();
    setCategory(event.target.value);
  };

  return (
    <form>
      <span className={s.inputWrapper}>
        <input
          type="text"
          className={s.categoryInput}
          list="category"
          name="categotyItem"
          placeholder="Категория товара"
          onChange={handlerChange}
          />
        </span>
      
      <datalist id="category" className={s.datalist}>
        {list.map(item => {
          return (
            <option key={item.id} value={item.name} className={s.datalistItem}>
              {item.name}
            </option>
          );
        })}
      </datalist>
    </form>
  );
}
