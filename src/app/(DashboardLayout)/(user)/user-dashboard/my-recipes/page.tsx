/* eslint-disable @typescript-eslint/no-explicit-any */
import MyRecipes from '@/components/user/MyRecipes';
import SearchingFiltering from '@/components/user/SearchingFiltering';
import { getRecipesOfUser } from '@/services/RecipeService'
import Link from 'next/link';
import React from 'react'

const MyRecipePage = async ({ searchParams }: {
    searchParams?: {
        query?: string;
        page?: string;
        category?: string;
        sortOrder?: string;
    };
}) => {
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const category = searchParams?.category || '';
    const sortOrder = searchParams?.sortOrder || '';
    try {
        const recipes = await getRecipesOfUser(query, currentPage);
        console.log(recipes);

        return (
            <div>
                {recipes?.data?.length > 0 ? (
                    <MyRecipes
                        recipes={recipes}
                        query={query}
                        currentPage={currentPage}
                        category={category}
                        sortOrder={sortOrder}
                    />
                ) : query ? (
                    // Case: No results for the current search query
                    <section className="py-24">
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                            <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">My Recipes</h2>

                            <div>
                                <SearchingFiltering placeholder="Search for recipes" />
                            </div>
                            <h1 className="text-3xl">No recipes matched your search.</h1>
                        </div>
                    </section>
                ) : (
                    // Case: User has no recipes posted yet
                    <div className="flex justify-center items-center flex-col gap-9">
                        <h1 className="text-3xl">You have no recipes posted yet.</h1>
                        <Link href="/user-dashboard/create-recipe" className="bg-green-400 px-3 py-4 rounded-md text-xl">
                            Post a recipe now
                        </Link>
                    </div>
                )}
            </div>
        );
    } catch (error: any) {
        // Handle the error gracefully on the frontend
        return <div>Error loading recipes: {error.message}</div>;
    }
}

export default MyRecipePage;
