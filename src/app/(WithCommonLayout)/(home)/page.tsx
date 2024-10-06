import Recipes from "@/components/home/recipeFeed/Recipes"
import UsersAvatars from "@/components/home/usersAvatars/UsersAvatars"
import { getAllUsers } from "@/services/AuthService"
import { getRecipes } from "@/services/RecipeService"



const page = async () => {
  const users = await getAllUsers()
  const recipes = await getRecipes()
  return (
    <div>
      <UsersAvatars users={users?.data} />
      <Recipes recipes={recipes} />
    </div>
  )
}

export default page