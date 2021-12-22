import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';
import s from './NotFoundView.module.css';

function NotFoundView({children}) {
    const [buttonNeeded, setButtonNeeded] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setButtonNeeded(true)
        }, 4000)
    }, [buttonNeeded])
    return (
        <div className={s.div}>
            <h1>Page not found</h1>
            {buttonNeeded ? <a href="/home"><button type="button">Вернуться к форме входа</button></a> : null}
            {children}
        </div>
    )
}

export default NotFoundView