import SearchContainer from "@/components/shared/SearchContainer";
import { getAnUser } from "@/services/AuthService";
import { getRecipes } from "@/services/RecipeService";

const SearchPage = async () => {
  const recipes = await getRecipes();
  const user = await getAnUser();
  return (
    <div className="py-20">
      <SearchContainer recipes={recipes} user={user} />
    </div>
  );
};

export default SearchPage;
