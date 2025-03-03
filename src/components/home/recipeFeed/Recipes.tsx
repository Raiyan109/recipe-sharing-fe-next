/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import Recipe from "./Recipe"
import { IRecipe, IUser } from "@/types"
import BlurredRecipe from "@/components/premium/BlurredRecipe"
import { useMemo, useState } from "react"
import { useRecipes } from "@/hooks/recipe.hook";

type IProps = {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean;
}

// const Recipes = ({ recipes, user }: { recipes: IRecipes, user: IProps }) => {
const Recipes = ({ user }: { user: IProps }) => {
    const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
    // const [filteredItems, setFilteredItems] = useState<IRecipe[]>([]);
    const { data: recipesFromTanstack } = useRecipes();

    // Ensure we get the recipes array safely
    const recipes = recipesFromTanstack?.data || [];

    const filters = ["Dinner", "Vegetarian", "Breakfast", "Healthy"];

    const handleFilterButtonClick = (selectedCategory: string) => {
        setSelectedFilters((prev) =>
            prev.includes(selectedCategory)
                ? prev.filter((el) => el !== selectedCategory)
                : [...prev, selectedCategory]
        );
    };

    // ✅ Use useMemo instead of useEffect to avoid infinite re-renders
    const filteredItems = useMemo(() => {
        if (selectedFilters.length > 0) {
            return recipes.filter((item) =>
                item.category.some((cat) => selectedFilters.includes(cat))
            );
        }
        return recipes;
    }, [selectedFilters, recipes]);

    // const handleFilterButtonClick = (selectedCategory: string) => {
    //     if (selectedFilters?.includes(selectedCategory)) {
    //         const filters = selectedFilters?.filter((el) => el !== selectedCategory);
    //         setSelectedFilters(filters);
    //     } else {
    //         setSelectedFilters([...selectedFilters, selectedCategory]);
    //     }
    // };

    // useEffect(() => {
    //     filterItems();
    // }, [selectedFilters, recipes]);

    // const filterItems = () => {
    //     if (selectedFilters.length > 0) {
    //         const tempItems = recipes?.filter((item) =>
    //             item.category.some((cat) => selectedFilters.includes(cat))
    //         );
    //         setFilteredItems(tempItems);
    //     } else {
    //         setFilteredItems(recipes || []);
    //     }
    // };

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
                                return <Recipe key={recipe._id} recipe={recipe} user={user.data} />;
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