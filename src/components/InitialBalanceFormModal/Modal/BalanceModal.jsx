import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BalanceModal.module.css';

export default function Modal({ children }) {
  const visible = !useSelector(state => state.auth.user.balanceIsSet);
  const rootStyles = [styles.modal];
  if (visible) {
    rootStyles.push(styles.active);
  }

  return (
    <div className={rootStyles.join(' ')} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  );
}
