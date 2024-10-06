import RecipeDetails from "@/components/home/recipeFeed/RecipeDetails";
import { getSingleRecipe } from "@/services/RecipeService";


interface RecipeId {
    params: {
        recipeId: string;
    };
}

// export async function generateStaticParams() {
//     const recipes = await getRecipes()
//     console.log(recipes, '');



//     return recipes?.data?.map((recipe: IRecipe) => ({
//         recipeId: recipe?._id,
//     }))
// }
const DynamicRecipePage = async ({ params }: RecipeId) => {
    const recipe = await getSingleRecipe(params.recipeId)
    return (
        <div>
            <RecipeDetails recipe={recipe.data} />
        </div>
    )
}

export default DynamicRecipePage