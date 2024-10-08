import RecipeDetails from "@/components/home/recipeFeed/RecipeDetails";
import { getSingleRecipe } from "@/services/RecipeService";




interface RecipeId {
    params: {
        recipeId: string;
    };
}


const DynamicMyRecipePage = async ({ params }: RecipeId) => {
    const recipe = await getSingleRecipe(params.recipeId)
    return (
        <div>
            <RecipeDetails recipe={recipe.data} />
        </div>
    )
}

export default DynamicMyRecipePage