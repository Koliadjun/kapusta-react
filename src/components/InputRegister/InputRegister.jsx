import React from 'react';
import s from './inputRegister.module.css';

export default function InputRegister({ type, placeholder, onChange, name }) {
  return (
    <div>
      <input
        className={s.input}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
