import React, { useState } from 'react';
import Select from 'react-select';
import list from './list.json';
import s from './styles.module.css';

export default function CategoryList({ categoryType = 'Категория товара' }) {
  const [selectedOption, setSelectedOption] = useState({});

  const handlerChange = (selectedOption) => {
    setSelectedOption({
      category:categoryType,
      name:selectedOption.value
    });
  };
  const filtredArray = Array.from(
    list.map(item => {
      let result
      if (item.type === categoryType) {
        return result= Object.assign({
          value: item.name,
          label: item.name,
        })}
      return result
    }),
  );
  const options=filtredArray.filter(item=>item!==undefined)

  return (
    <form>
      <Select
       placeholder={categoryType}
        onChange={handlerChange}
        options={options}
      />
    </form>
  );
}
