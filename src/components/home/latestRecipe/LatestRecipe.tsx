import { IRecipe } from "@/types"
import Link from "next/link"


const LatestRecipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="w-80 h-80 bg-card rounded-3xl  p-4 flex flex-col items-start justify-center gap-3 ">
            {/* hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow */}
            <div className="w-72 h-40 bg-sky-300 rounded-2xl"></div>
            <div className="">
                <p className="font-semibold capitalize text-xl">Card title</p>
                <p className="font-medium text-card-foreground/50">4 popular types of cards in UI design.</p>
            </div>
            <Link href={`/`} className="flex items-center justify-center w-full px-6 py-2.5 text-center text-xs lg:text-xl duration-200 bg-primary text-card border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black">
                See more
            </Link>
        </div>
    )
}

export default LatestRecipe