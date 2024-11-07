'use client'

import { IRecipe, IRecipes, IUser } from "@/types";
import Recipe from "../home/recipeFeed/Recipe";
import BlurredRecipe from "../premium/BlurredRecipe";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type IUserProps = {
    success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
}

const SearchContainer = ({recipes,user}: {recipes: IRecipes, user: IUserProps}) => {
    const [recipeData, setRecipeData] = useState()
    const searchParams = useSearchParams()

  // Now get the query 

  const searchQuery = searchParams && searchParams.get("q"); // we use `q` to set the query to the browser, it could be anything

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
      const findRecipe = recipes?.data.filter((recipe) => {
        if (searchQuery) {
          return recipe?.title?.toLowerCase().includes(searchQuery.toLowerCase()) 

            // user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||

            // user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||

            // user.email.toLowerCase().includes(searchQuery.toLowerCase())
          
        } else {
          // If no search query, return the original data
          return true;
        }
      });


      // Update profileData based on search results

      setRecipeData(findRecipe);

    };


    // Call handleSearch when searchQuery changes

    handleSearch();

  }, [searchQuery]); // Only rerun the effect if searchQuery changes

  return (
    <div className="max-w-7xl container mx-auto">
    <div className="p-5 bg-card rounded-md flex items-center justify-center ">
    <div className="p-5 rounded-md w-full relative">
                <div className="px-8 space-y-3">
                    <div className="grid grid-cols-1 gap-7">
                        {recipes?.data?.map((recipe: IRecipe) => {
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

</div>
</div>
  )
}

export default SearchContainer