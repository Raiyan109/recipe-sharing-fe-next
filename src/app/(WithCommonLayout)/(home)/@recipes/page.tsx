import Recipes from "@/components/home/recipeFeed/Recipes"
import { getRecipes } from "@/services/RecipeService"

export const revalidate = 10;
const page = async () => {
    const recipes = await getRecipes()
    return (
        <div>
            <Recipes recipes={recipes} />
        </div>
    )
}

export default page