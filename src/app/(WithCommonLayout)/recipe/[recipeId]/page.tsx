
import RecipeDetails2 from "@/components/home/recipeFeed/RecipeDetails2";
import Header from "@/components/shared/Header";
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
        <>
            <Header />
            <div className="mx-auto flex flex-col w-full max-w-[1900px]">
                <RecipeDetails2 recipe={recipe.data} />
            </div>
        </>
    )
}

export default DynamicRecipePage