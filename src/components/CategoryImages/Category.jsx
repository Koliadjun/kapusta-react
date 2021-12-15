/* eslint-disable jsx-a11y/alt-text */
import React from "react"



const Category = ({ costs,images, category}) => {
    
    return (
        <>
            <ul>
            <li>{costs}</li>
                <li>
                    <img src={images} alt="icon" />
                </li>
            <li>{category}</li>
            </ul>
        </>
    )

}

export default Category