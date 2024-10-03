/* eslint-disable @typescript-eslint/no-explicit-any */
import MyRecipes from '@/components/user/MyRecipes';
import { getRecipesOfUser } from '@/services/RecipeService'
import Link from 'next/link';
import React from 'react'

const Page = async () => {
    try {
        const recipes = await getRecipesOfUser();

        return (
            <div>
                {recipes?.data?.length > 0 ? (
                    <MyRecipes recipes={recipes} />
                ) : (
                    <div className='flex justify-center items-center flex-col gap-9'>
                        <h1 className='text-3xl'>You have no recipes posted yet.</h1>
                        <Link href='/user-dashboard/create-recipe' className='bg-green-400 px-3 py-4 rounded-md text-xl'>Post a recipe now</Link>
                    </div>
                )}
            </div>
        );
    } catch (error: any) {
        // Handle the error gracefully on the frontend
        return <div>Error loading recipes: {error.message}</div>;
    }
}

export default Page;
