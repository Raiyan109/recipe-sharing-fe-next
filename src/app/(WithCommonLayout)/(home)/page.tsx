import Recipes from "@/components/home/recipeFeed/Recipes"
import UsersAvatars from "@/components/home/usersAvatars/UsersAvatars"
import { getAllUsers, getAnUser } from "@/services/AuthService"
import { getRecipes } from "@/services/RecipeService"



const HomePage = async () => {
  const users = await getAllUsers()
  const recipes = await getRecipes()
  const user = await getAnUser()
  return (
    <div>
      {user && <UsersAvatars users={users?.data} />}
      <Recipes recipes={recipes} user={user} />
    </div>
  )
}

export default HomePage