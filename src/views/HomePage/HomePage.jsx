import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import s from './HomePage.module.css';
import queryString from 'query-string';
import { authOperations } from '../../redux/auth';
import { useDispatch } from 'react-redux';

import imgText from 'images/svg/Union.svg';
import RegisterForm from 'components/RegisterForm';
import LoginForm from 'components/LogInForm';
import Container from '../../components/Container';

const HomePage = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [loginFormNeeded, setLoginFormNeeded] = useState(true);

  const [firstLoaded, setFirstLoaded] = useState(true);
  const token = Object.values(queryString.parse(window.location.href))[0];

  if (pathname.length < 10) localStorage.setItem('navigateTo', '/comment');

  useEffect(() => {
    if (firstLoaded && token) {
      setFirstLoaded(false);
      dispatch(authOperations.isGooglingUser(token.slice(0, -1)));
      setFirstLoaded(false);
    }
    // eslint-disable-next-line
  }, []);

  const onRegistrationClick = () => {
    setLoginFormNeeded(false);
  };

  const onBackToLogin = () => {
    setLoginFormNeeded(true);
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
        {loginFormNeeded ? (
          <LoginForm onRegistrationClick={onRegistrationClick} />
        ) : (
          <RegisterForm onBackToLogin={onBackToLogin} />
        )}
        <div className={s.bcgImageBottom}></div>
      </div>
    </Container>
  );
};

export default HomePage;
