import React, {useEffect, useState} from 'react';
import RegistrationForm from '../components/RegistrationForm';
import queryString from 'query-string';
import { authOperations } from '../redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'

import { authSelectors } from '../redux/auth';
import axios from 'axios';

function HomeView({...props}) {
  const dispatch = useDispatch();
  const params = useParams()
  const [firstLoaded, setFirstLoaded] = useState(true)
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn)
  const token = Object.values(queryString.parse(window.location.href))[0];
  
  useEffect(()=> {
    if (firstLoaded && token) {
      console.log(token.slice(0, -1))
        setFirstLoaded(false)
        dispatch(authOperations.isGooglingUser(token.slice(0, -1)))
        setFirstLoaded(false)
      }
  }, [])

  
  

  return (
    <div>
      <h1>HomeView</h1>
      <RegistrationForm />
    </div>
  );
}

export default HomeView;
