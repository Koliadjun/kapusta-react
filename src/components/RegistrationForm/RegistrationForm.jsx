import React from 'react';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import { useState, useCallback } from 'react';
// import { useDispatch } from "react-redux";
import { Formik } from 'formik';
// import { authOperations } from "../redux/auth";
import s from './RegistrationForm.module.css';
import axios from 'axios';

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

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 20) {
    errors.password = 'Must be between 3 and 20 symbols';
  }

  if (!values.repeatPassword) {
    errors.repeatPassword = 'Required';
  } else if (values.password !== values.repeatPassword) {
    errors.repeatPassword = 'Must be equal to password';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

function RegistrationForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [registrationFormNeeded, setRegistrationFormNeeded] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(null);
  //   const dispatch = useDispatch();

  const loginInitialValues = {
    email: '',
    password: '',
  };

  const registrationInitialValues = {
    email: '',
    password: '',
    repeatPassword: '',
  };

  const tooglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = useCallback((values, { resetForm }) => {
    //   dispatch(authOperations.registration(values));
    console.log(values);
    resetForm({ values: '' });
  });

  const onRegistrationClick = () => {
    setRegistrationFormNeeded(!registrationFormNeeded);
  };

  const doRegistrationSubmit = useCallback(async (values, { resetForm }) => {
    try {
      await axios.post('http://localhost:5000/api/auth/registration', {
        email: values.email,
        password: values.password,
      });
      resetForm({ values: '' });
      return alert('Registration was successfull! Please, check your email for account verification')
    } catch (err) {
        alert(err.response.data.message)
        return resetForm({ values: '' });
    }
  });

  return !registrationFormNeeded ? (
    <div className={s.div}>
      <Formik
        initialValues={loginInitialValues}
        validate={loginValidate}
        onSubmit={handleSubmit}
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

            <button type="button" onClick={tooglePassword}>
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
              onClick={onRegistrationClick}
            >
              Registration
            </Button>
          </form>
        )}
      </Formik>
    </div>
  ) : (
    <div className={s.div}>
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

            <button type="button" onClick={tooglePassword}>
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </button>
            <br />
            <br />

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
