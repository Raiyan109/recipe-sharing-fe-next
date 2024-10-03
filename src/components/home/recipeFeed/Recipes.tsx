'use client'

import { LayoutList, Pizza, UtensilsCrossed } from "lucide-react"
import Recipe from "./Recipe"
import { IRecipe, IRecipes } from "@/types"
import BlurredRecipe from "@/components/premium/BlurredRecipe"
import { useUser } from "@/context/user.provider"

const Recipes = ({ recipes }: { recipes: IRecipes }) => {
    const { user } = useUser()
    return (
        <div className="">
            <div className="p-5 bg-gray-300 rounded-md">
                {/* Categories */}
                <div className="p-5 rounded-md mb-5">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <LayoutList size={20} />
                            All Topics
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <Pizza size={20} />
                            Street food
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                    </div>
                </div>

                <div className="p-5 rounded-md w-full relative">
                    <div className="px-8 space-y-3">
                        <div className="grid grid-cols-1 gap-7">
                            {recipes?.data?.map((recipe: IRecipe) => {
                                // Check if the recipe is free and the user has premium membership
                                const isFree = recipe.contentAvailability === 'free';
                                const isPremiumUser = user?.membership === 'premium';

                                // Render Recipe or BlurredRecipe based on the conditions
                                if (isFree || isPremiumUser) {
                                    return <Recipe key={recipe._id} recipe={recipe} />;
                                } else {
                                    return <BlurredRecipe key={recipe._id} recipe={recipe} />;
                                }
                            })}
                        </div>
                    </div>
                </div>


                {/* <Link href={`/products/${product?._id}`} className='btn btn-primary'>Details</Link> */}
            </div>
        </div>
    )
}

export default Recipes