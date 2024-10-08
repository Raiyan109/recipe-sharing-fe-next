import RecipeDetails from "@/components/home/recipeFeed/RecipeDetails";
import { getRecipes, getSingleRecipe } from "@/services/RecipeService";
import { IRecipe } from "@/types";


interface RecipeId {
    params: {
        recipeId: string;
    };
}

export async function generateStaticParams() {
    const recipes = await getRecipes()
    return recipes?.data.slice(0, 4).map((recipe: IRecipe) => ({
        recipeId: recipe?._id,
    }))
}
const DynamicRecipePage = async ({ params }: RecipeId) => {

    const recipe = await getSingleRecipe(params.recipeId)
    return (
        <div>
            <RecipeDetails recipe={recipe.data} />
        </div>
    )
}

export default DynamicRecipePage