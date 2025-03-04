'use client'
import { IRecipe, IRecipes } from "@/types"
import MyRecipe from "./MyRecipe"
import SearchingFiltering from "./SearchingFiltering"
import PaginationComponent from "./PaginationComponent"
import { useState } from "react"
import { useRouter } from "next/navigation"


const MyRecipes = ({ recipes, query, currentPage: initialPage, category, sortOrder }: {
    recipes: IRecipes; query: string; currentPage: number; category: string;
    sortOrder: string;
}) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const totalPages = recipes?.meta?.totalPages;
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        router.push(`?query=${query}&page=${newPage}`);
    };

    const filteredRecipes = recipes?.data
        .filter((recipe: IRecipe) => !category || recipe.category.includes(category))
        .sort((a: IRecipe, b: IRecipe) => {
            if (sortOrder === 'asc') {
                return a.title.localeCompare(b.title);
            } else {
                return b.title.localeCompare(a.title);
            }
        });



    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                <h2 className="font-manrope font-bold text-4xl text-black dark:text-white mb-8 text-center">My Recipes</h2>

                <div className="flex justify-center">
                    <SearchingFiltering placeholder="Search for recipes" />
                </div>
                {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 */}
                <div className="flex items-center justify-center gap-5">
                    {filteredRecipes.map((recipe: IRecipe) => (
                        <MyRecipe key={recipe?._id}
                            recipe={recipe}
                        />
                    ))}

                </div>

                <div>
                    <PaginationComponent
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                        totalPages={totalPages}
                    />
                </div>
            </div>
        </section>

    )
}

export default MyRecipes