import { IRecipe } from "@/types"


const Recipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="space-y-3">
            <h1 className="font-semibold capitalize text-xl">{recipe.title}</h1>
            <h1 className="text-lg">{recipe.desc}</h1>
        </div>
    )
}

export default Recipe