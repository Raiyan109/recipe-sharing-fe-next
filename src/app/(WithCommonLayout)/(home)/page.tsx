import Recipes from "@/components/home/recipeFeed/Recipes"
import { getRecipes } from "@/services/RecipeService"


const HomePage = () => {
  const recipes = getRecipes()
  return (
    <div>
      <Recipes recipes={recipes} />
    </div>
  )
}

export default HomePage