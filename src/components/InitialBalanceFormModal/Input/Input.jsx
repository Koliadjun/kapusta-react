import Button from 'components/Button/Button';
import React from 'react';
import styles from './Input.module.css';

export default function Input({ sendBalance }) {
  const onClick = () => {
    //sends balance to BD
    sendBalance(false);
  };
  return (
    <form className={styles.form}>
      <label htmlFor="balanceInput">Баланс:</label>
      <input id="balanceInput" type="text" />
      <Button text={'Подтвердить'} onClick={onClick} />
    </form>
  );
}
