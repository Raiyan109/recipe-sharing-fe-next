
import Recipes from "@/components/home/recipeFeed/Recipes";
import { getAnUser } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService";

const HomePage = async () => {
  // const users = await getAllUsers();
  const recipes = await getRecipes();
  const user = await getAnUser();

  // Check if users data is available and if the user is logged in
  // const hasUsers = users?.data?.length > 0;
  // const isLoggedIn = !!user;

  return (
    <div className="space-y-4">

      {/* {isLoggedIn && hasUsers && (
        <Post />
        <UserAvatars2 users={users?.data} />
      )} */}


      <Recipes recipes={recipes} user={user} />
    </div>
  );
};

export default HomePage;
