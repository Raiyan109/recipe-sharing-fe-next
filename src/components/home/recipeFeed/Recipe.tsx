import { IRecipe } from "@/types"
import { Forward, Heart, MessagesSquare, Star } from "lucide-react"
import Image from "next/image"





const Recipe = ({ recipe }: { recipe: IRecipe }) => {
    // const router = useRouter()
    // const handleGoToRecipeDetail = () => {
    //     router.push(`/${recipe._id}`)
    //     onClick={() => handleGoToRecipeDetail()}
    // }
    return (
        <div className="flex flex-col gap-5 relative bg-gray-50 p-3 rounded-md cursor-pointer" >
            <div className="absolute -left-12 top-0 rounded-full">
                <Image
                    src={recipe.user?.photo}
                    width={40}
                    height={40}
                    alt="user photo"
                    className="rounded-full"
                />
            </div>
            <h1 className="font-bold text-sm">{recipe.user?.name}</h1>
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

            {/* <div>
                <h1 className="font-semibold capitalize text-xl">Ingredients</h1>
            </div> */}

            <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-5">
                    <div className="flex items-center gap-1">
                        <Heart size={16} />
                        <h1 className="font-bold">23</h1>
                        <h1>Likes</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <Star size={16} />
                        <h1 className="font-bold">233</h1>
                        <h1>Rating</h1>
                    </div>
                    <div className="flex items-center gap-1">
                        <Forward size={16} />
                        <h1 className="font-bold">55</h1>
                        <h1>Share</h1>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-1">
                        <MessagesSquare size={16} />
                        <h1 className="font-bold">86</h1>
                        <h1>Comment</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipe