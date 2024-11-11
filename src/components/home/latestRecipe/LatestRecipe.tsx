import { IRecipe } from "@/types"
import Image from "next/image"
import Link from "next/link"
import moment from 'moment'


const LatestRecipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="w-80 h-80 bg-card rounded-3xl  p-4 flex flex-col  gap-3 ">
            {/* hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow */}
            <div className="w-full h-40 flex items-center justify-center">
                <Image
                    src={recipe.image}
                    width={150}
                    height={150}
                    alt="recipe photo"
                    className="rounded-md"
                    style={{ width: '270px', height: '150px', objectFit: 'cover' }}
                />
            </div>

            <div className="">
                <p className="font-semibold capitalize text-xl">{recipe.title}</p>
                <p className="font-medium text-card-foreground/50">{moment(recipe.createdAt).format("MMM Do YY")}</p>
            </div>
            <Link href={`/recipe/${recipe?._id}`} className="flex items-center justify-center w-full px-6 py-2.5 text-center text-xs lg:text-xl duration-200 bg-primary text-black font-medium border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                See more
            </Link>
        </div>
    )
}

export default LatestRecipe