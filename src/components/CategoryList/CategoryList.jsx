import React, { useState } from 'react';
import Select from 'react-select';
import list from './list.json';
import s from './styles.module.css';

export default function CategoryList({ categoryType = 'Категория товара' }) {
  const [selectedOption, setSelectedOption] = useState({});

  const handlerChange = (selectedOption) => {
    setSelectedOption({
      category:categoryType,
      categoryItem:selectedOption.value
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

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: 'none',
    color:state.isFocused? 'var(--main-text-color)':'var(--placeholders-text-color)',
    padding:'10px 20px',
    backgroundColor:state.isFocused? 'var(--secondary-background-color)': 'transparent'   
  }),
  placeholder:()=>({
    color:'var(--placeholders-text-color)',
    paddingLeft:'20px'
  }),
  control:()=>({
    backgroundColor:'transparent',
    borderStyle:'none',
    display:'flex',
    alignItems:'center',
    justifyContent:'spaceBetween'
  }),
  indicatorSeparator:()=>({
    width:'0'
  }),
  valueContainer:()=>({
    marginRight:'125px'
 
  }),
  indicatorsContainer:(provided)=>({
    ...provided,
    padding:'0',

  }),
  indicatorContainer:(provided)=>({
    ...provided,
    padding:'0'

  }),
  input:()=>({
    display:'none'
  }),
  menu:()=>({
    boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2);'
  }),
  menuList:()=>({
    overflowY:''
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = 'opacity 300ms';  
    return { ...provided, opacity, transition,color:'var(--placeholders-text-color)',paddingLeft:'20px' };
  }
}


  return (
    <div className={s.categoryForm}>
      <Select
      styles={customStyles}
       placeholder={categoryType}
        onChange={handlerChange}
        options={options}
        className={s.categoryFormSelect}
      />
    </div>
  );
}
