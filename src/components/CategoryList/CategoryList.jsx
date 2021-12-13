import React, { useState } from 'react';
import list from './list.json';

export default function CategoryList() {
    const[category,setCategory]=useState('')

  const handlerChange = event => {
    event.preventDefault();
    setCategory(event.target.value)
   };

  return (
    <form>
      <input
        list="category"
        name="categotyItem"
        placeholder="Категория товара"
        onChange={handlerChange}
      />

      <datalist id="category">
        {list.map(item => {
          return (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          );
        })}
      </datalist>
    </form>
  );
}
