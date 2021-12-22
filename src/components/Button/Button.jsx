import React from 'react';
import s from './Button.module.css';
// import propTypes from 'prop-types';

export default function Button({
  text,
  type = 'button',
  onClick,
}) {
  return (
    <div className={s.rectangleContainer}>
      <button
        className={s.button}
        type={type}
        onClick={onClick}
        >
        {text}
      </button>
    </div>
  );
}

// Button.propTypes = {
//   text: propTypes.string.isRequired,
//   type: propTypes.string,
//   onClick: propTypes.func.isRequired,
//   rectangle: propTypes.bool,
//   border: propTypes.bool,
// };
