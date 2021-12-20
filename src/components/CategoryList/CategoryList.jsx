
import React from "react";
import { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';


import CategoryCoast from '../CategoryImages/CategoryCoast'
import CategoryIncome from '../CategoryImages/CategoryIncome'
import CategoryIncomeList from '../CategoryImages/CategoryIncomeList'
import s from './CategoryList.module.css'


export default function CategoryImages() {
  const [typeTrans, setTypeTrans] = useState('expenses');
    const handleClick = () => {
        console.log(typeTrans);
        if (typeTrans === 'incomings') {
            setTypeTrans('expenses')
        }   
        if (typeTrans === 'expenses') {
            setTypeTrans('incomings');
        }
}
    return (   
    
        <div className={s.sectionWrapper}> 
         <div className={s.wrapper}>            
                    <button
                className={s.leftBtn}
                type="button"
                onClick={() => handleClick()}>
            <MdKeyboardArrowLeft size={20} style={{ color: '#FF751D' }} />
             </button>
            {typeTrans === 'expenses' ? (
                <p className={s.title}> Расходы </p>
                ) : (
                <p className={s.title}> Доходы </p>
                )}
              <button
                className={s.rightBtn}
                type="button"
                onClick={() => handleClick()}>
                <MdKeyboardArrowRight size={20} style={{ color: '#FF751D' }} />
                   
                </button> 
                  </div>
                <>
                {typeTrans === 'expenses' ? (
                    <CategoryCoast />
                    ): (
                    <CategoryIncome />
        )}
                        </>
                        
                  
            </div>  
   
    )
}