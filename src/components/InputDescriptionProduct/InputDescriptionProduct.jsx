import React from 'react';
import s from './inputDescriptionProduct.module.css';

export default function InputDescriptionProduct({
  type,
  placeholder,
  onChange,
  name,
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
