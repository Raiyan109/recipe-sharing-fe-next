import CategorySlug from '@/components/home/categories/CategorySlug';
import Header from '@/components/shared/Header';
import { getAnUser } from '@/services/AuthService';
import { getRecipes } from '@/services/RecipeService';


const CategoriesPage = async () => {
    const recipes = await getRecipes();
    const user = await getAnUser()
    return (
        <>
            <Header user={user} />
            <div className="mx-auto flex flex-col w-full container">
                <CategorySlug recipes={recipes} />
            </div>
        </>
    )
}

export default CategoriesPage