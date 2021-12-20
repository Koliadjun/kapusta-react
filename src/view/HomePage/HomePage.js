import React, { useState } from 'react';
import s from './HomePage.module.css';

import imgText from 'images/svg/Union.svg';
import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LogInForm';
import Container from '../../components/Container';

const HomePage = () => {
  const [login, setLogin] = useState(true);

  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };

  return (
    <Container>
      <div className={s.firstSection}>
        <div className={s.bcgImage}></div>
        <div className={s.text}>
          <img className={s.imgText} src={imgText} alt="Kapusta" />
          <h1 className={s.fontText}>SMART FINANSE</h1>
        </div>
      </div>
      <div className={s.secondSection}>
        {login ? (
          <LoginForm onClickRegister={onRegisterClick} />
        ) : (
          <RegisterForm onClickComeBack={onComeBackClick} />
        )}
        <div className={s.bcgImageBottom}></div>
      </div>
    </Container>
  );
};

export default HomePage;
