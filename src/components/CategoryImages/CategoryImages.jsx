import React from "react";
import { useState } from "react";

import CategoryCoastList from './CategoryCoastList'
import CategoryIncomeList from './CategoryIncomeList'

export default function CategoryImages() {
    const [isToggled, setIsToggled] = useState(false);
    const toggleClick =() => {
    setIsToggled(!isToggled)
}
    return (
        <>
            
            
           {isToggled ?
                (<><h1 onClick={toggleClick}>Расход</h1><>
                    <CategoryCoastList />
                </></>
                ) :
                (<><h1 onClick={toggleClick}>Доход</h1><CategoryIncomeList /></>
                
                )} 
        </>
    )
}