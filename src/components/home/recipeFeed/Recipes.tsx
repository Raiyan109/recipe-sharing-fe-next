/* eslint-disable react-hooks/exhaustive-deps */
'use client'

type IProps = {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean;
}

import Recipe from "./Recipe"
import { IRecipe, IRecipes, IUser } from "@/types"
import BlurredRecipe from "@/components/premium/BlurredRecipe"

import { useEffect, useState } from "react"


const Recipes = ({ recipes, user }: { recipes: IRecipes, user: IProps }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    const [filteredItems, setFilteredItems] = useState<IRecipe[]>([]);


    const filters = ["Dinner", "Vegetarian", "Breakfast", "Healthy"];

    const handleFilterButtonClick = (selectedCategory: string) => {
        if (selectedFilters?.includes(selectedCategory)) {
            const filters = selectedFilters?.filter((el) => el !== selectedCategory);
            setSelectedFilters(filters);
        } else {
            setSelectedFilters([...selectedFilters, selectedCategory]);
        }
    };

    useEffect(() => {
        filterItems();
    }, [selectedFilters, recipes?.data]);

    const filterItems = () => {
        if (selectedFilters.length > 0) {
            const tempItems = recipes?.data?.filter((item) =>
                item.category.some((cat) => selectedFilters.includes(cat))
            );
            setFilteredItems(tempItems);
        } else {
            setFilteredItems(recipes?.data || []);
        }
    };

    return (
        <div className="p-5 bg-card rounded-2xl">
            {/* Categories */}
            <div className="p-5 rounded-2xl mb-5">
                <div className="flex flex-wrap items-center justify-center gap-2">
                    {filters?.map((category, idx) => (
                        <button
                            onClick={() => handleFilterButtonClick(category)}
                            className={`flex items-center gap-2  px-3 py-3 rounded-full text-black shadow-xl bg-gray-100 font-medium ${selectedFilters?.includes(category) ? "bg-primary" : ""
                                }`}
                            key={`filters-${idx}`}
                        >
                            {category}
                        </button>
                    ))}
                    {/* <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
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
                        </div> */}
                </div>
            </div>

            <div className="p-5 rounded-md w-full relative">
                <div className="px-1 md:px-8 space-y-3">
                    <div className="grid grid-cols-1 gap-7">
                        {filteredItems?.map((recipe: IRecipe) => {
                            // Check if the recipe is free and the user has premium membership
                            const isFree = recipe.contentAvailability === 'free';
                            const isPremiumUser = user?.data?.membership === 'premium';

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
    )
}

export default Recipes