import React from 'react';
import s from './inputBalance.module.css';

export default function InputBalance({ text, name, placeholder, onChange }) {
  return (
    <div>
      <input
        className={s.input}
        name={name}
        type={text}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
