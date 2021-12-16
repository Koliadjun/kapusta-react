
import React from "react";
import { useState } from "react";


import CategoryCoastList from './CategoryCoastList'
import CategoryIncomeList from './CategoryIncomeList'
import s from './CategoryList.module.css'
import sprite from '../../images/svg/sprite.svg'


export default function CategoryImages() {
    const [isToggled, setIsToggled] = useState(false);
    const toggleClick =() => {
    setIsToggled(!isToggled)
}
    return (   
    
            <div className={s.categories}>
                
                {isToggled ?
                (<>
                    <svg className={s.vectorLeft}>
                        <use href={`${sprite}#icon-vector-left`} />
                   </svg>
                <h1 className={s.title} onClick={toggleClick}>Расход</h1>
                    <svg className={s.vectorRight}>
                        <use href={`${sprite}#icon-vector-right`} />
                   </svg>
                    <div className={s.listWrap}>
                            <CategoryCoastList />
                    </div>
                </>) :
                (<>
                    <svg className={s.vectorLeft}>
                        <use href={`${sprite}#icon-vector-left`} />
                   </svg>
                    <h1 className={s.title} onClick={toggleClick}>Доход</h1>
                    <svg className={s.vectorRight}>
                        <use href={`${sprite}#icon-vector-right`} />
                   </svg>
                        <div className={s.listWrap}>
                        <CategoryIncomeList />
                    </div>
                </>)}
            </div>
   
    )
}