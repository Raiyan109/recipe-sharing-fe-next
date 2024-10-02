import MyRecipes from '@/components/user/MyRecipes';
import { getRecipesOfUser } from '@/services/RecipeService'
import React from 'react'

const page = async () => {
    const recipes = await getRecipesOfUser()
    return (
        <div>
            {recipes ? (
                <MyRecipes recipes={recipes} />
            ) : (
                <div>No Recipe Found</div>
            )}
        </div>
    )
}

export default page