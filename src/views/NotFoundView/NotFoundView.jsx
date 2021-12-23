import React from 'react';
// import { Outlet } from 'react-router-dom';
import s from './NotFoundView.module.css';
import imgText from 'images/svg/Union.svg';

function NotFoundView({ children }) {
  // const [buttonNeeded, setButtonNeeded] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.firstSection}>
        <div className={s.bcgImage}></div>
        <div className={s.text}>
          <img className={s.imgText} src={imgText} alt="Kapusta" />
          <h1 className={s.fontText}>
            Страница не найдена. Если вы хотите вернуться на главную - нажмите
            на кнопку.
          </h1>
          <div className={s.innerDiv}>
            <a href="/home">
              <button type="button" className={s.button}>
                <p className={s.buttonText}>Главная</p>
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className={s.secondSection}>{children}</div>
    </div>
  );
}

export default NotFoundView;
