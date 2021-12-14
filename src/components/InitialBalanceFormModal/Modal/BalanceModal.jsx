import React from 'react';

import styles from './BalanceModal.module.css';

export default function Modal({ children, visible, setVisible }) {
  const rootStyles = [styles.modal];
  if (visible) {
    rootStyles.push(styles.active);
  }

  return (
    // <div className={rootStyles.join(' ')} onClick={() => setVisible(false)}>
    <div className={rootStyles.join(' ')}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
