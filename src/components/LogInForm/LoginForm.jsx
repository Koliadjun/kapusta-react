import { useDispatch } from 'react-redux';
import { useState } from 'react';
import Button from '../Button/Button';
import s from './LoginForm.module.css';
import GoogleAuth from 'components/GoogleAuth';

import {authOperations} from '../../redux/auth';

const LoginForm = ({ onRegistrationClick }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailBlurred, setEmailBlurred] = useState(false);
  const [passwordBlurred, setPasswordBlurred] = useState(false);
  const [invalidEmail, setInvalidEmail] = useState('Это обязательное поле');
  const [invalidPassword, setInvalidPassword] = useState('Это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');

  const onBlur = ({target: {name}}) => {
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
  const inputEmailHandler = ({target: {value}}) => {
    setEmail(value);
    if (value.includes("`") ||
        value.includes("*") || 
        value.includes(",")) {
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

  const inputPasswordHandler = ({target: {value}}) => {
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

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({email, password}))
    resetForm();
  };

  return (
    <div className={s.div}>
      <p className={s.textForGoogle}>
        Вы можете авторизоваться с помощью Google Account:
      </p>
      <div className={s.googleAuth}>
        <GoogleAuth />
      </div>
      <p className={s.textForGoogle}>
        Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:
      </p>
      <form onSubmit={handleSubmit} className={s.form} action="" autoComplete="off">
        <div>
          <label className={s.formLabel}>
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
              className={s.inputEmail}
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$" 
              title="Неправильный формат email. Разрешенные символы: '._%+-"
              required
            />
            {emailBlurred && invalidEmail && (
              <div className={s.invalidEmail}>
                {invalidEmail}{' '}
              </div>
            )}
          </label>
        </div>
        <div>
          <label className={s.formLabel}>
            <span className={s.labelText}>
              {passwordBlurred && invalidPassword && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </span>
            <input
              onBlur={onBlur}
              onChange={inputPasswordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.inputPassword}
              title="Пароль может, сoстоять не меньше чем из трех символов"
              required
            />
            {passwordBlurred && invalidPassword && (
              <div className={s.invalidPassword}>
                {invalidPassword}{' '}
              </div>
            )}
          </label>
        </div>
        <div className={s.containerButton}>
          <Button type="submit" text="ВОЙТИ"></Button>
          <Button
            type="button"
            text="РЕГИСТРАЦИЯ"
            onClick={onRegistrationClick}
          ></Button>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
