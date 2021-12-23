import React from 'react';
import s from './inputBalance.module.css';

export default function InputBalance({
  text,
  name,
  placeholder,
  onChange,
  value,
}) {
  return (
    <div>
      <input
        value={value}
        className={s.input}
        name={name}
        type={text}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}
