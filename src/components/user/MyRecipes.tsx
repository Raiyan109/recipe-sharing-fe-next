import { IRecipe, IRecipes } from "@/types"
import MyRecipe from "./MyRecipe"


const MyRecipes = ({ recipes }: { recipes: IRecipes }) => {
    return (
        <section className="py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="font-manrope font-bold text-4xl text-black mb-8 max-xl:text-center">My Recipes</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
                    {recipes?.data?.map((recipe: IRecipe) => (
                        <MyRecipe key={recipe?._id}
                            recipe={recipe}
                        />
                    ))}

                </div>
            </div>
        </section>

    )
}

export default MyRecipes