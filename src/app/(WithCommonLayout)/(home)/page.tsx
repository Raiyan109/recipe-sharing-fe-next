import Recipes from "@/components/home/recipeFeed/Recipes";


import { getAnUser } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService";

const HomePage = async () => {

  const recipes = await getRecipes();
  const user = await getAnUser();



  return (
    <div className="space-y-4">

      {/* {isLoggedIn && hasUsers && (
        <UserAvatars2 users={users?.data} />
      )} */}


      <Recipes recipes={recipes} user={user} />
    </div>
  );
};

export default HomePage;
