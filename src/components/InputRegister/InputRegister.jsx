import React from 'react';
import s from './inputRegister.module.css';

export default function InputRegister({
  type = 'text',
  placeholder = 'your@email.com',
  onChange,
  name = 'name',
}) {
  return (
    <div>
      <input
        className={s.input}
        type="text"
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
}
