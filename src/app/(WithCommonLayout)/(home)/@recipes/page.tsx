import Recipes from "@/components/home/recipeFeed/Recipes"
import UsersAvatars from "@/components/home/usersAvatars/UsersAvatars";
import { getAllUsers } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService"

export const revalidate = 10;
const page = async () => {
    const recipes = await getRecipes()
    const users = await getAllUsers()
    return (
        <div>
            <UsersAvatars users={users.data} />
            <Recipes recipes={recipes} />
        </div>
    )
}

export default page