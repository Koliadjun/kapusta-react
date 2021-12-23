import React from 'react';
import s from './inputCalculator.module.css';
import svg from '../../images/svg/sprite.svg';
// import InputBalance from 'components/InputBalance/InputBalance';

export default function InputCalculator({
  type,
  text,
  name,
  placeholder,
  onChange,
  onClick,
  value,
}) {
  return (
    <div className={s.wrapper}>
      <input
        value={value}
        className={s.input}
        name={name}
        type={text}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button className={s.button} type={type} onClick={onClick}>
        <svg className={s.svg} width="20" height="20">
          <use href={`${svg}#icon-calculator`} />
        </svg>
      </button>
    </div>
  );
}
