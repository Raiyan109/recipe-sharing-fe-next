import { IRecipe } from "@/types"
import Image from "next/image"


const Recipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="flex flex-col gap-2 relative bg-gray-50 p-3 rounded-md">
            <div className="absolute -left-11 top-0 rounded-full">
                <Image
                    src={recipe.user?.photo}
                    width={30}
                    height={30}
                    alt="user photo"
                    className="rounded-full"
                />
            </div>
            <h1 className="font-bold">{recipe.user?.name}</h1>
            <h1 className="font-semibold capitalize">{recipe.title}</h1>
            <h1 className=" text-gray-600 font-medium">{recipe.desc}</h1>
            <div className="grid grid-cols-4 gap-3">
                <Image
                    src={recipe.image}
                    width={200}
                    height={200}
                    alt="recipe photo"
                    className="rounded-md"
                />
                <Image
                    src={recipe.image}
                    width={200}
                    height={200}
                    alt="recipe photo"
                    className="rounded-md"
                />
                <Image
                    src={recipe.image}
                    width={200}
                    height={200}
                    alt="recipe photo"
                    className="rounded-md"
                />
                <Image
                    src={recipe.image}
                    width={200}
                    height={200}
                    alt="recipe photo"
                    className="rounded-md"
                />
            </div>
        </div>
    )
}

export default Recipe