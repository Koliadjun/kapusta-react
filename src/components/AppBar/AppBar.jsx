import React from "react";
import { useState } from "react";

import Header from "components/Header/Header";
import Container from "components/Container/Container";
import LogOutHeaderMenu from "components/LogOutHeaderMenu/LogOutHeaderMenu";
import s from './AppBar.module.css'


export default function AppBar() {
const {isLogIn, setIsLogIn}= useState(true)
    return (
        <Container>
            <div className={s.appBar}>
                <Header />
            <LogOutHeaderMenu/>
            </div>
            
            {/* {isLogIn ? <LogOutHeaderMenu/>:<Header/>}    */}
        </Container>
    )
    
}