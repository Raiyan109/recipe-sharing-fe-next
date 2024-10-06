
import TestRecipe from "@/components/home/recipeFeed/TestRecipe";



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
    console.log(params);

    // const recipe = await getSingleRecipe(params.recipeId)
    return (
        <div>
            {/* <RecipeDetails recipe={recipe.data} /> */}
            <TestRecipe />
        </div>
    )
}

export default DynamicRecipePage