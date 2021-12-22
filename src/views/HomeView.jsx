import React, { useEffect, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import queryString from 'query-string';
import { authOperations } from '../redux/auth';
import {
  useDispatch,
  // useSelector
} from 'react-redux';
import { transactionOperations } from 'redux/transaction';

// import { authSelectors } from '../redux/auth';
// import axios from 'axios';

function HomeView({ ...props }) {
  const dispatch = useDispatch();
  const [firstLoaded, setFirstLoaded] = useState(true);
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const token = Object.values(queryString.parse(window.location.href))[0];
  console.log(props);
  useEffect(() => {
    if (firstLoaded && token) {
      setFirstLoaded(false);
      dispatch(authOperations.isGooglingUser(token.slice(0, -1)));
      setFirstLoaded(false);
    }
  }, [dispatch, firstLoaded, token]);

  return (
    <div>
      <h1>HomeView</h1>
      <RegistrationForm />
    </div>
  );
}

export default HomeView;
