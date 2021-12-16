import React from 'react';
import s from './input.module.css';

export default function Input({
  text = 'text',
  name = 'name',
  placeholder = 'data',
}) {
  return (
    <div>
      <input
        className={s.input}
        name={name}
        type={text}
        placeholder={placeholder}
      />
    </div>
  );
}
