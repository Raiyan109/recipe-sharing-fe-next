
import MobileRecipes from "@/components/home/mobileRecipeFeed/MobileRecipes";
import MobileUserAvatars from "@/components/home/mobileUserAvatar/MobileUserAvatars";
import Recipes from "@/components/home/recipeFeed/Recipes";
import { getAllUsers, getAnUser } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService";

const HomePage = async () => {
  const users = await getAllUsers();
  const recipes = await getRecipes();
  const user = await getAnUser();

  // Check if users data is available and if the user is logged in
  const hasUsers = users?.data?.length > 0;
  const isLoggedIn = !!user;

  return (
    <div className="space-y-4">

      {/* {isLoggedIn && hasUsers && (
        <Post />
        <UserAvatars2 users={users?.data} />
      )} */}

      {/* Desktop view */}
      <div className="hidden md:block">
        <Recipes recipes={recipes} user={user} />
      </div>

      {/* Mobile view */}
      <div className="block md:hidden">
        {isLoggedIn && hasUsers && (
          <div className="overflow-x-hidden">
            <MobileUserAvatars users={users?.data} />
          </div>
        )}

        <MobileRecipes recipes={recipes} user={user} />
      </div>
    </div>
  );
};

export default HomePage;
