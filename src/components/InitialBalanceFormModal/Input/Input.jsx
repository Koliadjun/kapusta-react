import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

import styles from './Input.module.css';

export default function Input() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const onSubmit = e => {
    e.preventDefault();
    //callback, that sends balance to DataBase
    // sendBalance(false);
    // setBalance(input);
    dispatch(
      authOperations.setBudget(Number(input.slice(0, -4).replace(/\s/g, ''))),
    );
    document.body.style.overflow = 'auto';
  };
  const onChange = e => {
    setInput(e.target.value);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label className={styles.label} htmlFor="balanceInput">
        Баланс:
      </label>
      {/* <input
        className={styles.input}
        value={input}
        id="balanceInput"
        name="balanceInput"
        type="number"
        pattern="\d+(\.\d{2})?"
        placeholder="00.00 UAH"
        autoComplete="off"
        onChange={onChange}
        required
        suffix=" UAH"
      /> */}
      <NumberFormat
        className={styles.input}
        value={input}
        thousandSeparator={' '}
        decimalSeparator="."
        decimalScale={2}
        fixedDecimalScale
        suffix=" UAH"
        displayType="input"
        placeholder="00.00 UAH"
        onChange={onChange}
        required
      />

      <button type={'submit'} className={styles.button__balance}>
        Подтвердить
      </button>
    </form>
  );
}
