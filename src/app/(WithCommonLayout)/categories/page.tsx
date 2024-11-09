import CategorySlug from '@/components/home/categories/CategorySlug';
import Header from '@/components/shared/Header';
import { getRecipes } from '@/services/RecipeService';
import React from 'react'

const CategoriesPage = async () => {
    const recipes = await getRecipes();
    return (
        <>
            <Header />
            <div className="mx-auto flex flex-col w-full container">
                <CategorySlug recipes={recipes} />
            </div>
        </>
    )
}

export default CategoriesPage