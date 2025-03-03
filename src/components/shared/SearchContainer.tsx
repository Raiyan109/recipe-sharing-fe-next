"use client";

import { IRecipe, IRecipes, IUser } from "@/types";
import Recipe from "../home/recipeFeed/Recipe";
import BlurredRecipe from "../premium/BlurredRecipe";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import GoBack from "../GoBack";

type IUserProps = {
  success: boolean;
  statusCode: number;
  message: string;
  data: IUser;
};

const SearchContainer = ({
  recipes,
  user,
}: {
  recipes: IRecipes;
  user: IUserProps;
}) => {
  const [recipeData, setRecipeData] = useState<IRecipe[]>([]);
  const searchParams = useSearchParams();

  // Now get the query

  const searchQuery = searchParams && searchParams.get("q"); // we use `q` to set the query to the browser, it could be anything

  useEffect(() => {
    const handleSearch = () => {
      // Filter the data based on search query
      const findRecipe = recipes?.data.filter((recipe) => {
        if (searchQuery) {
          return recipe?.title
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase());
        } else {
          // If no search query, return the original data
          return true;
        }
      });
      setRecipeData(findRecipe || []);
    };

    handleSearch();
  }, [searchQuery, recipes]); // Only rerun the effect if searchQuery changes

  return (
    <div>
      <div className="pl-24 pb-5">
        <GoBack />
      </div>
      <div className="pl-24 pb-12">
        <h1 className="text-2xl">
          Showing result for <span className="font-bold">{searchQuery}</span>
        </h1>
      </div>
      <div className="max-w-7xl container mx-auto">
        <div className="p-5 bg-card rounded-md flex items-center justify-center ">
          <div className="p-5 rounded-md w-full relative">
            <div className="px-8 space-y-3">
              <div className="grid grid-cols-1 gap-7">
                {recipeData?.length > 0 ? (
                  recipeData.map((recipe: IRecipe) => {
                    // Check if the recipe is free and the user has premium membership
                    const isFree = recipe.contentAvailability === "free";
                    const isPremiumUser = user?.data?.membership === "premium";

                    // Render Recipe or BlurredRecipe based on the conditions
                    if (isFree || isPremiumUser) {
                      return <Recipe key={recipe._id} recipe={recipe} user={user.data} />;
                    } else {
                      return <BlurredRecipe key={recipe._id} recipe={recipe} />;
                    }
                  })
                ) : (
                  <p>No recipes found matching your search.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchContainer;
