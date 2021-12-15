import React from "react";

import categoriesCoasts from './categoriesCoasts.json'
import Category from './Category'

export default function CategoryList(){
    return (
        <>
            {categoriesCoasts.map((categorieCoast) => (
                <Category
                key={categorieCoast.id}
                costs={categorieCoast.costs}
                image={categorieCoast.image}
                category={categorieCoast.category}
            />
            ))}
            </>
    )
}