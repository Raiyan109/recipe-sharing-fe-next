import Recipes from "@/components/home/recipeFeed/Recipes"
import { getRecipes } from "@/services/RecipeService"

const INITIAL_NUMBER_OF_USERS = 10
const page = async () => {
    const recipes = await getRecipes(0, INITIAL_NUMBER_OF_USERS)

    return (
        <div>

            <Recipes recipes={recipes} />
        </div>
    )
}

export default page