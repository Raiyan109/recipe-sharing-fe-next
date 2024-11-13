/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { IRecipe, IRecipes } from "@/types"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const CategorySlug = ({ recipes }: { recipes: IRecipes }) => {
    const [filteredRecipes, setFilteredRecipes] = useState<IRecipe[]>([]);
    const searchParams = useSearchParams();
    const categoryQuery = searchParams.get('category');

    useEffect(() => {
        if (categoryQuery) {
            const filtered = recipes.data.filter((recipe: IRecipe) =>
                recipe.category.includes(categoryQuery)
            );
            setFilteredRecipes(filtered);
        }
    }, [categoryQuery, recipes]);


    console.log(categoryQuery, 'query');


    return (
        <div className="px-5 py-3  flex flex-col items-center  w-full container">
            <div>
                <h1 className="text-3xl py-4">{categoryQuery} Recipes</h1>
                <div className="grid grid-cols-3 pt-5 gap-6">
                    {filteredRecipes.length > 0 ? (
                        filteredRecipes.map((recipe: IRecipe) => (
                            <div key={recipe._id} className="border rounded-lg p-4 bg-gray-100 shadow-lg">
                                <Image
                                    src={recipe.image}
                                    alt={recipe.title}
                                    width={300}
                                    height={300}
                                    className="w-full h-48 object-cover rounded-lg mb-4" />
                                <h2 className="text-xl font-bold text-black">{recipe.title}</h2>
                            </div>
                        ))
                    ) : (
                        <p>No recipes found for this category.</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CategorySlug