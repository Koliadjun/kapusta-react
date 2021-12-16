
import React from "react"
import s from './CategoryList.module.css'




const Category = ({ costs,images, category}) => {
    
    return (
        <div className={s.categoryThumb}>
            <ul className={s.categoryList}>
            <li className={s.categoryItems}>{costs}</li>
                <li className={s.categoryItems}>
                    <img src={images} alt="icon" />
                </li>
            <li className={s.categoryItems}>{category}</li>
            </ul>
        </div>
    )

}

export default Category