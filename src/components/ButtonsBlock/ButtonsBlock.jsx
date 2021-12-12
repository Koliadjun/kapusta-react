import React from 'react';
import propTypes from 'prop-types';
import Button from 'components/Button/Button';
import s from './ButtonsBlock.module.css';

export default function ButtonsBlock({
  textLeftButton = 'ввод',
  textRightButton = 'очистить',
  onClickLeftButton,
  onClickRightButton,
  rectangle = false,
}) {
  return (
    <div className={rectangle ? s.rectangleButtons : s.buttons}>
      <Button
        text={textLeftButton}
        onClick={onClickLeftButton}
        rectangle={rectangle}
      />
      <Button
        text={textRightButton}
        onClick={onClickRightButton}
        rectangle={rectangle}
      />
    </div>
  );
}

ButtonsBlock.propTypes = {
  textLeftButton: propTypes.string,
  textRightButton: propTypes.string,
  onClickLeftButton: propTypes.func.isRequired,
  onClickRightButton: propTypes.func.isRequired,
  rectangle: propTypes.bool,
};
