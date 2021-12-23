import React from 'react';
import s from './ModalContent.module.css';
import ButtonsBlock from 'components/ButtonsBlock/ButtonsBlock';

export default function ModalContent({
  message,
  textLeftButton,
  textRightButton,
   onClickLeftButton,
  onClickRightButton,
}) {
  return (
    <div className={s.container}>
      <span className={s.span}>{message}</span>
      <ButtonsBlock
        onClickLeftButton={onClickLeftButton}
        onClickRightButton={onClickRightButton}
        textLeftButton={textLeftButton}
        textRightButton={textRightButton}
      />
    </div>
  );
}
