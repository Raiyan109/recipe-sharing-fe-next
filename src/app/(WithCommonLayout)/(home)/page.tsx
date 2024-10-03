import Recipes from "@/components/home/recipeFeed/Recipes"
import { getRecipes } from "@/services/RecipeService"


const HomePage = async () => {
  const recipes = await getRecipes()
  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  )
}

export default HomePage