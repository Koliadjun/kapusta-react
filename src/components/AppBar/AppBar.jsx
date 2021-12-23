import React from 'react';
// import { useState } from 'react';
import { authSelectors } from 'redux/auth';
import { useSelector } from 'react-redux';
import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import LogOutHeaderMenu from 'components/LogOutHeaderMenu/LogOutHeaderMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  const isLoggedin = true;
  // const isLoggedin = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <div className={s.appBar}>
        <Header />
        {isLoggedin && <LogOutHeaderMenu />}
      </div>
    </Container>
  );
}
