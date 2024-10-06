import RecipeDetails from "@/components/home/recipeFeed/RecipeDetails";
import { getSingleRecipe } from "@/services/RecipeService";
import { IRecipe } from "@/types";

interface RecipeId {
    params: {
        recipeId: string;
    };
}

export async function generateStaticParams() {
    const result = await fetch('http://localhost:5000/api/v1/recipe')
    const recipes = await result.json()
    console.log(recipes);


    return recipes?.data?.map((recipe: IRecipe) => ({
        recipeId: recipe?._id,
    }))
}
const page = async ({ params }: RecipeId) => {
    const recipe = await getSingleRecipe(params.recipeId)
    return (
        <div>
            <RecipeDetails recipe={recipe.data} />
        </div>
    )
}

export default page