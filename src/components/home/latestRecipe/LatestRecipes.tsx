import { getAnUser } from "@/services/AuthService";
import { getLatestRecipes } from "@/services/RecipeService";
import { IRecipe } from "@/types";
import LatestRecipe from "./LatestRecipe";
import LatestBlurredRecipe from "./LatestBlurredRecipe";




const LatestRecipes = async () => {
    const latestRecipes = await getLatestRecipes();
    const user = await getAnUser();
    return (
        <div>
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold capitalize text-xl bg-card rounded-2xl py-1 px-3">Latest Recipes</h1>
                {latestRecipes?.data?.slice(0, 5)?.map((recipe: IRecipe) => {
                    // Check if the recipe is free and the user has premium membership
                    const isFree = recipe.contentAvailability === 'free';
                    const isPremiumUser = user?.data?.membership === 'premium';

                    // Render Recipe or BlurredRecipe based on the conditions
                    if (isFree || isPremiumUser) {
                        return <LatestRecipe key={recipe._id} recipe={recipe} />;
                    } else {
                        return <LatestBlurredRecipe key={recipe._id} recipe={recipe} />;
                    }
                })}
            </div>
        </div>
    )
}

export default LatestRecipes