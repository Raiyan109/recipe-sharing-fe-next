import { getAnUser } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService";
import { IRecipe } from "@/types";
import LatestRecipe from "./LatestRecipe";




const LatestRecipes = async () => {
    const recipes = await getRecipes();
    const user = await getAnUser();
    return (
        <div>
            <div className="flex flex-col gap-5">
                {recipes?.data?.map((recipe: IRecipe) => {
                    // Check if the recipe is free and the user has premium membership
                    const isFree = recipe.contentAvailability === 'free';
                    const isPremiumUser = user?.data?.membership === 'premium';

                    // Render Recipe or BlurredRecipe based on the conditions
                    if (isFree || isPremiumUser) {
                        return <LatestRecipe key={recipe._id} recipe={recipe} />;
                    } else {
                        return <LatestRecipe key={recipe._id} recipe={recipe} />;
                    }
                })}
            </div>
        </div>
    )
}

export default LatestRecipes