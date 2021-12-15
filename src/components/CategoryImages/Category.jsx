import React from "react"



const Category = ({ costs,image, category}) => {
    
    return (
        <>
            <ul>
            <li>{costs}</li>
            {/* <li>{image}</li> */}
            <li>{category}</li>
            </ul>
        </>
    )

}

export default Category