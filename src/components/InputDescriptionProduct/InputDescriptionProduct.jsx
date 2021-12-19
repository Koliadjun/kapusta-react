import React from 'react';
import s from './inputDescriptionProduct.module.css';

export default function InputDescriptionProduct({
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
