import React from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { useState } from 'react';
import { Formik } from 'formik';
import s from './RegistrationForm.module.css';
import axios from 'axios';
import LogoutButton from 'components/LogoutButton';
import {authOperations} from '../../redux/auth';
import {useDispatch, useSelector} from 'react-redux';
import {authSelectors} from '../../redux/auth';
import { useNavigate } from "react-router-dom";

const loginValidate = values => {
  const errors = {};

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be between 3 and 20 symbols';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const registrationValidate = values => {
  const errors = {};

  // if (!values.password) {
  //   errors.password = 'Required';
  // } else if (values.password.length > 20) {
  //   errors.password = 'Must be between 3 and 20 symbols';
  // }

  // if (!values.repeatPassword) {
  //   errors.repeatPassword = 'Required';
  // } else if (values.password !== values.repeatPassword) {
  //   errors.repeatPassword = 'Must be equal to password';
  // }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function RegistrationForm() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const [showPassword, setShowPassword] = useState(false);
  const [registrationFormNeeded, setRegistrationFormNeeded] = useState(false);

  const loginInitialValues = {
    email: '',
    password: '',
  };

  const registrationInitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const onButtonClick = () => {
    setRegistrationFormNeeded(!registrationFormNeeded);
  };

  const doRegistrationSubmit = (values, { resetForm }) => {

    dispatch(authOperations.registration(values))
    resetForm({ values: "" });
    setRegistrationFormNeeded(true)
  };

  const doLoginSubmit = async (values, { resetForm }) => {
    dispatch(authOperations.logIn(values))
      resetForm({ values: '' });

      
  };

  return !registrationFormNeeded ? (
    <div className={s.div}>
      <p className={s.googleText}>Вы можете авторизоваться с помощью Google Account:</p>
      <a href="http://localhost:5000/api/auth/google" className={s.google}>Click me to authorize with Google!</a>
      <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
      <Formik
        initialValues={loginInitialValues}
        validate={loginValidate}
        onSubmit={doLoginSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Type a password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <button type="button" onClick={togglePassword}>
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
            <br />
            <br />

            <Button
              color="primary"
              variant="contained"
              type="submit"
              name="login"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(loginInitialValues).length &&
                  Object.keys(errors).length === 0
                )
              }
            >
              Login
            </Button>

            <Button
              color="primary"
              variant="contained"
              type="button"
              name="registration"
              onClick={onButtonClick}
            >
              Registration
            </Button>
          </form>
        )}
      </Formik>
      {isLoggedIn ? <LogoutButton /> : null}
      
    </div>
  ) : (
    <div className={s.div}>
      <p className={s.googleText}>Вы можете авторизоваться с помощью Google Account:</p>
      <a href="http://localhost:5000/auth/google" className={s.google}>Click me to authorize with Google!</a>
      <p>Или зайти с помощью e-mail и пароля, предварительно зарегистрировавшись:</p>
      <Formik
        initialValues={registrationInitialValues}
        validate={registrationValidate}
        onSubmit={doRegistrationSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Enter your email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              id="password"
              name="password"
              label="Type a password"
              type={showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <TextField
              fullWidth
              id="repeatPassword"
              name="repeatPassword"
              label="repeat the password"
              type={showPassword ? 'text' : 'password'}
              value={values.repeatPassword ? values.repeatPassword : ''}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.repeatPassword && Boolean(errors.repeatPassword)}
              helperText={touched.repeatPassword && errors.repeatPassword}
            />

            <button type="button" onClick={togglePassword}>
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
            <br />
            <br />

            <Button
              color="primary"
              variant="contained"
              type="button"
              name="login"
              onClick={onButtonClick}
            >
              Back to login
            </Button>

            <Button
              color="primary"
              variant="contained"
              type="submit"
              name="registration"
              disabled={
                isSubmitting ||
                !(
                  Object.keys(touched).length ===
                    Object.keys(registrationInitialValues).length &&
                  Object.keys(errors).length === 0
                )
              }
            >
              Register me!
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default RegistrationForm;
