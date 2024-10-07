'use client'
import { IRecipe, IRecipes } from "@/types"
import MyRecipe from "./MyRecipe"
import SearchingFiltering from "./SearchingFiltering"
import PaginationComponent from "./PaginationComponent"
import { useState } from "react"
import { useRouter } from "next/navigation"


const MyRecipes = ({ recipes, query, currentPage: initialPage }: { recipes: IRecipes, query: string, currentPage: number }) => {
    const [currentPage, setCurrentPage] = useState(initialPage);
    const totalPages = recipes?.meta?.totalPages;
    const router = useRouter();

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        router.push(`?query=${query}&page=${newPage}`);
    };

    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">My Recipes</h2>

                <div>
                    <SearchingFiltering placeholder="Search for recipes" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {recipes?.data?.map((recipe: IRecipe) => (
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