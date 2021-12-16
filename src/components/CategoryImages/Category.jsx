
import React from "react"
import s from './CategoryList.module.css'




const Category = ({ costs,images, category}) => {
    
    return (
        <div className={s.categoryThumb}>
            <ul className={s.categoryList}>
            <li>{costs}</li>
                <li>
                    <img src={images} alt="icon" />
                </li>
            <li>{category}</li>
            </ul>
        </div>
    )

}

export default Category