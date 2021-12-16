
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
                    
                    <h1 className={s.title} onClick={toggleClick}>
                        <svg className={s.vectorLeft}>
                        <use href={`${sprite}#icon-vector-left`} />
                        </svg>
                        Расход
                        <svg className={s.vectorRight}>
                            <use href={`${sprite}#icon-vector-right`} />
                        </svg>
                    </h1>
                    
                    <div className={s.listWrap}>
                            <CategoryCoastList />
                    </div>
                </>) :
                (<>
                  
                    <h1 className={s.title} onClick={toggleClick}>
                          <svg className={s.vectorLeft}>
                            <use href={`${sprite}#icon-vector-left`} />
                        </svg>
                        Доход
                        <svg className={s.vectorRight}>
                            <use href={`${sprite}#icon-vector-right`} />
                        </svg>
                    </h1>
                    
                        <div className={s.listWrap}>
                        <CategoryIncomeList />
                    </div>
                </>)}
            </div>
   
    )
}