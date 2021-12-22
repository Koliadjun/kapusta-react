import { useDispatch } from 'react-redux';
import { useState } from 'react';
import s from './RegisterForm.module.css';
import Button from '../Button/Button';
import GoogleAuth from 'components/GoogleAuth';

import { authOperations } from '../../redux/auth';
// import {authSelectors} from '../../redux/auth';
// import { useNavigate } from "react-router-dom";

const RegisterForm = ({ onBackToLogin }) => {
  const dispatch = useDispatch();

  const [repeatPassword, setRepeatPassword] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState('Это обязательное поле');
  const [invalidPassword, setInvalidPassword] = useState(
    'Это обязательное поле',
  );
  const [errorSymbol, setErrorSymbol] = useState('*');

  const onBlur = ({ target: { name } }) => {
    switch (name) {
      case 'email':
        setEmailBlurred(true);
        break;
      case 'password':
        setPasswordBlurred(true);
        break;
      default:
        return;
    }
  };

  const inputEmailHandler = ({ target: { value } }) => {
    setEmail(value);
    if (value.includes('`') || value.includes('*') || value.includes(',')) {
      setInvalidEmail('Неправильно введен email');
      setErrorSymbol('*');

      if (!value) {
        setInvalidEmail('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setInvalidEmail('');
    }
  };

  const inputPasswordHandler = ({ target: { value } }) => {
    setPassword(value);
    if (value.length < 3) {
      setInvalidPassword('Пароль должен быть не меньше 3 символов');
      if (!value) {
        setInvalidPassword('это обязательное поле');
      }
    } else {
      setInvalidPassword('');
    }
  };

  const inputRepeatPasswordHandler = ({ target: { value } }) => {
    setRepeatPassword(value);
  };

  const resetForm = () => {
    setRepeatPassword('');
    setEmail('');
    setPassword('');
  };

  const doRegistrationSubmit = e => {
    e.preventDefault();
    if (repeatPassword !== password) {
      alert('Введенные пароли не совпадают');
      setPassword('');
      setRepeatPassword('');
      return;
    }
    dispatch(authOperations.registration({ email, password }));
    resetForm();
  };

  return (
    <div className={s.div}>
      <p className={s.textForGoogle}>
        Вы можете зарегистрироваться с помощью Google Account:
      </p>
      <div className={s.googleAuth}>
        <GoogleAuth />
      </div>
      <p className={s.promtText}>Либо с помощью заполнения данных полей:</p>
      <form
        onSubmit={doRegistrationSubmit}
        className={s.form}
        action=""
        autoComplete="off"
      >
        <div className={s.formDiv}>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {emailBlurred && invalidEmail && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Электронная почта:
            </p>
            <input
              onBlur={onBlur}
              onChange={inputEmailHandler}
              type="email"
              name="email"
              value={email}
              placeholder="your@email.com"
              className={s.formInput}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$"
              title="Неправильный формат email. Разрешенные символы: '._%+-"
              required
            />
            {emailBlurred && invalidEmail && (
              <div className={s.invalidEmail}>{invalidEmail} </div>
            )}
          </label>
        </div>
        <div className={s.formDiv}>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {passwordBlurred && invalidPassword && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </p>
            <input
              onBlur={onBlur}
              onChange={inputPasswordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.formInput}
              title="Пароль может, сoстоять не меньше чем из трех символов"
              required
            />
            {passwordBlurred && invalidPassword && (
              <div className={s.invalidPassword}>{invalidPassword} </div>
            )}
          </label>
        </div>
        <div className={s.formDiv}>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>Повторите пароль:</p>
            <input
              onBlur={onBlur}
              onChange={inputRepeatPasswordHandler}
              type="password"
              name="repeatPassword"
              value={repeatPassword}
              placeholder="Повторите пароль"
              className={s.formInput}
              required
            />
          </label>
        </div>
        <div className={s.containerButton}>
          <Button type="button" text="НАЗАД" onClick={onBackToLogin}></Button>
          <Button type="submit" text="РЕГИСТРАЦИЯ"></Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
