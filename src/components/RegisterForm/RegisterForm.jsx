// import { useDispatch } from 'react-redux';
import { useState } from 'react';
import toast from 'react-hot-toast';
import s from './register.module.css';
import { ImWarning } from 'react-icons/im';
import Button from '../Button/Button';
// import { register } from 'redux/auth/auth-operations';

// import Modal from 'components/Modal';
// import { getUserName, getUserEmail } from 'redux/auth';

const RegisterForm = ({ onClickComeBack }) => {
  // const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameDirty, setNameDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [nameError, setNameError] = useState('это обязательное поле');
  const [emailError, setEmaiError] = useState('это обязательное поле');
  const [passwordError, setPasswordError] = useState('это обязательное поле');
  const [errorSymbol, setErrorSymbol] = useState('*');

  // const onRegister = () => dispatch(register({ name, email, password }));

  const blurHandler = e => {
    switch (e.target.name) {
      case 'name':
        setNameDirty(true);
        break;
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
      default:
        return;
    }
  };

  const nameHandler = e => {
    setName(e.target.value);
    const re = /^[A-Za-zА-Яа-яЁё' '\-()0-9]{3,30}$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setNameError('Некорректное имя');
      setErrorSymbol('*');
      if (!e.target.value) {
        setNameError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setNameError('');
    }
  };

  const emailHandler = e => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmaiError('Некорректный емейл');
      setErrorSymbol('*');
      if (!e.target.value) {
        setEmaiError('это обязательное поле');
        setErrorSymbol('*');
      }
    } else {
      setEmaiError('');
    }
  };

  const passwordHandler = e => {
    setPassword(e.target.value);
    if (e.target.value.length < 6) {
      setPasswordError('Пароль должен быть не меньше 6 символов');
      if (!e.target.value) {
        setPasswordError('это обязательное поле');
      }
    } else {
      setPasswordError('');
    }
  };

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // onRegister();
    clearInput();
    toast.custom(
      <div className={s.toastDiv}>
        <ImWarning className={s.toastIcon} /> There was sent an email
        confirmation to your email adress: {email}. Please confirm it.
      </div>,
    );
  };

  return (
    <div className={s.formRegistr}>
      <p className={s.promtText}>Для регистрации заполните поля:</p>
      <form onSubmit={handleSubmit} action="" autoComplete="on">
        <div>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {nameDirty && nameError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Имя:
            </p>
            <input
              onBlur={blurHandler}
              onChange={nameHandler}
              type="text"
              name="name"
              value={name}
              placeholder="Ваше имя"
              className={s.formInput}
              pattern="^[A-Za-zА-Яа-яЁёЄєЇї' '\-()0-9]{3,30}$"
              title="Имя может состоять только от трёх до 30 букв, апострофа, тире и пробелов. Например Adrian, Jac Mercer, d'Artagnan, Александр Репета и т.п."
              required
            />
            {nameDirty && nameError && (
              <div
                style={{
                  color: 'red',
                  fontSize: 10,
                  paddingTop: 4,
                  textAlign: 'left',
                }}
              >
                {nameError}{' '}
              </div>
            )}
          </label>
        </div>
        <div>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {emailDirty && emailError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Электронная почта:
            </p>
            <input
              onBlur={blurHandler}
              onChange={emailHandler}
              type="text"
              name="email"
              value={email}
              placeholder="your@email.com"
              className={s.formInput}
              pattern="[A-Za-zА-Яа-яЁёЄєЇї0-9._%+-]+@[A-Za-zА-Яа-яЁёЄєЇї0-9.-]+\.[A-Za-zА-Яа-яЁёЄєЇї]{2,4}$"
              title="Email может, сoстоять из букв цифр и обязательного символа '@'"
              required
            />
            {emailDirty && emailError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {emailError}{' '}
              </div>
            )}
          </label>
        </div>
        <div>
          <label className={s.formLabel} htmlFor="">
            <p className={s.labelText}>
              {passwordDirty && passwordError && (
                <span style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                  {errorSymbol}{' '}
                </span>
              )}
              Пароль:
            </p>
            <input
              onBlur={blurHandler}
              onChange={passwordHandler}
              type="password"
              name="password"
              value={password}
              placeholder="Пароль"
              className={s.formInput}
              pattern="[0-9A-Za-zА-Яа-яЁёЄєЇї!@#$%^&*]{6,}"
              title="Пароль может, сoстоять не меньше чем из шести букв цифр и символов '!@#$%^&*'"
              required
            />
            {passwordDirty && passwordError && (
              <div style={{ color: 'red', fontSize: 10, paddingTop: 4 }}>
                {passwordError}{' '}
              </div>
            )}
          </label>
        </div>
        <div className={s.containerButton}>
          <Button type="button" text="НАЗАД" onClick={onClickComeBack}></Button>
          <Button type="submit" text="РЕГИСТРАЦИЯ"></Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
