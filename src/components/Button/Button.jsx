import React from 'react';
import s from './Button.module.css';
// import propTypes from 'prop-types';

export default function Button({
  text,
  type = 'button',
  onClick,
  rectangle,
  border = false,
}) {
  return (
    <div className={rectangle && s.rectangleContainer}>
      <button
        className={rectangle ? s.rectangle : s.button}
        type={type}
        onClick={onClick}
        style={
          border
            ? { borderTopLeftRadius: ' 0', borderBottomLeftRadius: ' 0' }
            : {}
        }
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
