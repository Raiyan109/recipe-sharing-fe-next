import CategorySlug from '@/components/home/categories/CategorySlug'
import { getRecipes } from '@/services/RecipeService';

const CategorySlugPage = async () => {
    const recipes = await getRecipes();
    return (
        <div>
            <CategorySlug recipes={recipes} />
        </div>
    )
}

export default CategorySlugPage