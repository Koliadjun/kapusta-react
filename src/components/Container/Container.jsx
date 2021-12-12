import React from "react";
import MediaQuery from 'react-responsive'
import s from "./styles.module.css";

export default function Container({ children }) {
    return (
        <>
            <MediaQuery maxWidth={767}>
                <div className={s.container}>{children}</div>
            </MediaQuery>
            <MediaQuery minWidth={768} maxWidth={1279}>
                <div className={s.containerTablet}>{children}</div>
            </MediaQuery>
            <MediaQuery minWidth={1280}>
                <div className={s.containerDesktop}>{children}</div>
            </MediaQuery>
        </>


    )
}