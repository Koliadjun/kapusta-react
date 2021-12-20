import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Select from 'react-select';
import PropTypes from 'prop-types';
import list from './list.json';
import s from './styles.module.css';

export default function CategoryList({ categoryType = 'Категория товара' }) {
  const [selectedOption, setSelectedOption] = useState({});

  const handlerChange = selectedOption => {
    setSelectedOption({
      category: categoryType,
      categoryItem: selectedOption.value,
    });
  };
  const filtredArray = Array.from(
    list.map(item => {
      let result;
      if (item.type === categoryType) {
        return (result = Object.assign({
          value: item.name,
          label: item.name,
        }));
      }
      return result;
    }),
  );
  const options = filtredArray.filter(item => item !== undefined);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: 'none',
      color: state.isFocused
        ? 'var(--main-text-color)'
        : 'var(--placeholders-text-color)',
      padding: '10px 20px',
      backgroundColor: state.isFocused
        ? 'var(--secondary-background-color)'
        : 'transparent',
    }),
    placeholder: () => ({
      color: 'var(--placeholders-text-color)',
      paddingLeft: '20px',
    }),
    control: () => ({
      backgroundColor: 'transparent',
      border: '2px solid var(--main-background-color)',
      boxSizing: 'border-box',
      borderBottomRightRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '282px',
    }),
    indicatorSeparator: () => ({
      width: '0',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      padding: '0',
    }),
    indicatorContainer: (provided, state) => ({
      ...provided,
      padding: '0',
      transform: state.isSelected ? 'rotate(45deg)' : '',
    }),
    input: () => ({
      display: 'none',
    }),
    menu: () => ({
      boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2);',
    }),
    menuList: () => ({
      overflowY: '',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return {
        ...provided,
        opacity,
        transition,
        color: 'var(--placeholders-text-color)',
        paddingLeft: '20px',
      };
    },
    valueContainer:()=>({
      padding:'0'
    })
  };
  const customStylesTablet = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: 'none',
      color: state.isFocused
        ? 'var(--main-text-color)'
        : 'var(--placeholders-text-color)',
      padding: '10px 20px',
      backgroundColor: state.isFocused
        ? 'var(--secondary-background-color)'
        : 'transparent',
    }),
    placeholder: () => ({
      color: 'var(--placeholders-text-color)',
      paddingLeft: '20px',
    }),
    control: () => ({
      backgroundColor: 'var(--main-background-color)',
      border: '2px solid var(--secondary-background-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }),
    indicatorSeparator: () => ({
      width: '0',
    }),
    indicatorsContainer: provided => ({
      ...provided,
      padding: '0',
    }),
    indicatorContainer: (provided, state) => ({
      ...provided,
      padding: '0',
    }),
    valueContainer: () => ({
      marginRight: '0',
      padding:'0'
    }),
    input: () => ({
      display: 'none',
    }),
    menu: () => ({
      boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2);',
    }),
    menuList: () => ({
      overflowY: '',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return {
        ...provided,
        opacity,
        transition,
        color: 'var(--placeholders-text-color)',
        paddingLeft: '20px',
      };
    },
  };
  const customStylesDesktop = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: 'none',
      color: state.isFocused
        ? 'var(--main-text-color)'
        : 'var(--placeholders-text-color)',
      padding: '10px 20px',
      backgroundColor: state.isFocused
        ? 'var(--secondary-background-color)'
        : 'transparent',
    }),
    placeholder: () => ({
      color: 'var(--placeholders-text-color)',
      paddingLeft: '20px',
    }),
    control: () => ({
      backgroundColor: 'var(--main-background-color)',
      border: '2px solid var(--secondary-background-color)',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'space-between'
    }),
    indicatorSeparator: () => ({
      width: '0',
    }),
    torsContainer: provided => ({
      ...provided,
      padding: '0',
    }),
    indicatorContainer: (provided, state) => ({
      ...provided,
      padding: '0',
      transform: state.isSelected ? 'rotate(45deg)' : '',
    }),
    input: () => ({
      display: 'none',
    }),
    menu: () => ({
      boxShadow: '0px 10px 60px rgba(170, 178, 197, 0.2);',
    }),
    menuList: () => ({
      overflowY: '',
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
      return {
        ...provided,
        opacity,
        transition,
        color: 'var(--placeholders-text-color)',
        paddingLeft: '20px',
      };
    },
    valueContainer:()=>({
      padding:'0'
    })
  };

  return (
    <>
      <MediaQuery maxWidth={767}>
        <div className={s.categoryForm}>
          <Select
            styles={customStyles}
            placeholder={categoryType}
            onChange={handlerChange}
            options={options}
            className={s.categoryFormSelect}
          />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={768} maxWidth={1279}>
        <div className={s.categoryFormTablet}>
          <Select
            styles={customStylesTablet}
            placeholder={categoryType}
            onChange={handlerChange}
            options={options}
            className={s.categoryFormSelect}
          />
        </div>
      </MediaQuery>

      <MediaQuery minWidth={1280}>
        <div className={s.categoryFormDesktop}>
          <Select
            styles={customStylesDesktop}
            placeholder={categoryType}
            onChange={handlerChange}
            options={options}
            className={s.categoryFormSelect}
          />
        </div>
      </MediaQuery>
    </>
  );
}

CategoryList.propTypes={
  categoryType:PropTypes.string
};