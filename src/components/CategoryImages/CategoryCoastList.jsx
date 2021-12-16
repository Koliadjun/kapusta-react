
import React from "react";

import categoriesCoasts from './categoriesCoasts.json';
import Category from './Category';


export default function CategoryList() {
    return (
        <>
            {categoriesCoasts.map(category => (
                <Category
                    key={category.id}
                    costs={category.costs}
                    images={category.images}
                    category={category.category}
                />
            ))}
        </>
    )
            }