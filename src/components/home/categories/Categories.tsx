import { getRecipes } from '@/services/RecipeService';
import './categories.css'
import Link from 'next/link';


const Categories = async () => {
    const recipesData = await getRecipes();
    const recipes = recipesData?.data || [];

    // Extract unique categories
    const categories = Array.from(
        new Set(recipes.flatMap((recipe: { category: string[] }) => recipe.category))
    ) as string[]; // Explicitly define the type as string[]
    console.log(categories);

    return (
        <div className="flex flex-col bg-card rounded-2xl">

            <div className="p-5">
                <h2
                    className="text-lg font-medium tracking-tighter  lg:text-3xl pb-5"
                >
                    All Categories
                </h2>
                <div className="category-card__tags">
                    <ul className="category-tag flex flex-wrap gap-2">
                        {categories.map((category, index) => (
                            <li key={index} className="tag__name bg-primary text-black">
                                <Link href={`/categories?category=${encodeURIComponent(category)}`}>
                                    {category}
                                </Link>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Categories