import React from "react";

import categoriesIncome from './categoriesIncome.json'
import Category from './Category'

export default function CategoryList(){
    return (
        <>
            {categoriesIncome.map((categorieIncome) => (
                <Category
                key={categorieIncome.id}
                costs={categorieIncome.costs}
                image={categorieIncome.image}
                category={categorieIncome.category}
            />
            ))}
            </>
    )
}