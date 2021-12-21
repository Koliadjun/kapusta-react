import React from 'react';
// import { useState } from 'react';

import Header from 'components/Header/Header';
import Container from 'components/Container/Container';
import LogOutHeaderMenu from 'components/LogOutHeaderMenu/LogOutHeaderMenu';
import s from './AppBar.module.css';

export default function AppBar() {
  // const [isLogin, setIsLogin] = useState(false);
  // console.log(isLogin);
  // const toggleClick = () => {
  //   setIsLogin(!isLogin);
  // };
  return (
    <Container>
      <div className={s.appBar}>
        <Header />
        <LogOutHeaderMenu />
        {/* <button type="button" onClick={toggleClick}>
          isLogin
        </button>
        {isLogin && <LogOutHeaderMenu />} */}
      </div>
    </Container>
  );
}
