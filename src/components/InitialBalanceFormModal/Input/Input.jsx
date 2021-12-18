import React, { useState } from 'react';
import styles from './Input.module.css';

export default function Input({ sendBalance }) {
  const [input, setInput] = useState('');
  const onSubmit = e => {
    e.preventDefault();
    //callback, that sends balance to DataBase
    sendBalance(false);
    // console.log('onClick');
  };
  const onChange = e => {
    // console.log('input', input);

    setInput(e.target.value);
    // if (input === '') return;
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="balanceInput">
        Баланс:
      </label>
      <input
        className={styles.input}
        value={input}
        id="balanceInput"
        name="balanceInput"
        type="text"
        pattern="\d+(\.\d{2})?"
        placeholder="00.00 UAH"
        autoComplete="off"
        onChange={onChange}
        required
      />

      <button type={'submit'} className={styles.button__balance}>
        Подтвердить
      </button>
    </form>
  );
}
