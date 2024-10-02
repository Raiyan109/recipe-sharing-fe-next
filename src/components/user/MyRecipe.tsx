import { IRecipe } from "@/types";
import Image from "next/image"


const MyRecipe = ({ recipe }: { recipes: IRecipe }) => {
    console.log(recipe);

    return (
        <div
            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer">
            <Image className="rounded-2xl object-cover" src={recipe?.image} alt="Jacket image" height={200} width={200} />
            <div className="absolute top-2 right-2 bg-white rounded-sm">
                {recipe?.contentAvailability}
            </div>
            <div
                className="absolute z-10 bottom-3 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">

                <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-base leading-7 text-black ">{recipe?.title}</h6>
                    <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">{recipe?.rating}</h6>
                </div>
                {/* <p className="text-xs leading-5 text-gray-500">Women Winter Wear</p> */}
            </div>
        </div>
    )
}

export default MyRecipe