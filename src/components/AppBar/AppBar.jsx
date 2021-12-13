import React from "react";
import { useState } from "react";

import Header from "components/Header/Header";
import Container from "components/Container/Container";
import LogOutHeaderMenu from "components/LogOutHeaderMenu/LogOutHeaderMenu";


export default function AppBar() {
const {isLogIn, setIsLogIn}= useState(true)
    return (
        <Container>
            <Header />
            <LogOutHeaderMenu/>
            {/* {isLogIn ? <LogOutHeaderMenu/>:<Header/>}    */}
        </Container>
    )
    
}