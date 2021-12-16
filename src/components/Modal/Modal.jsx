import React from 'react';
 import svgCloses from '../../images/svg/close.svg';

import s from './Modal.module.css';

export default function Modal({ active, setActive, children }) {
  return (
    <div
      className={active ? `${s.modal} ${s.active}` : s.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={
          active ? `${s.modal__content} ${s.active}` : s.modal__content
        }
        onClick={e => e.stopPropagation()}
      >
        <button className={s.modalButton} onClick={() => setActive(false)}>
          <img src={svgCloses} alt="close" className={s.img}/>
        </button>
        {children}
      </div>
    </div>
  );
}
//  <svg>
//    <use href={`${svgCloses}#icon-envelope`} />
//  </svg>;
