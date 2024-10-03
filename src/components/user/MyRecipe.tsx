'use client'
import { useDeleteRecipe } from "@/hooks/recipe.hook";
import { IRecipe } from "@/types";
import Image from "next/image"


const MyRecipe = ({ recipe }: { recipe: IRecipe }) => {
    const { mutate: handleDeleteRecipe } = useDeleteRecipe();
    const deleteRecipe = (id: string) => {
        handleDeleteRecipe({ id })
    }

    return (
        <div
            className="relative bg-cover group rounded-3xl bg-center overflow-hidden mx-auto sm:mr-0 xl:mx-auto cursor-pointer w-full bg-white">
            <div className="">
                <Image className="rounded-t-2xl object-cover" src={recipe?.image} alt="Jacket image" height={400} width={400} />
            </div>
            <span className="absolute top-2 right-2 bg-white rounded-sm p-1">
                {recipe?.contentAvailability}
            </span>
            <div
                className="absolute z-10 top-64 left-0 mx-3 p-3 bg-white w-[calc(100%-24px)] rounded-xl shadow-sm shadow-transparent transition-all duration-500 group-hover:shadow-indigo-200 group-hover:bg-indigo-50">

                <div className="flex items-center justify-between">
                    <h6 className="font-semibold text-base leading-7 text-black ">{recipe?.title}</h6>
                    <h6 className="font-semibold text-base leading-7 text-indigo-600 text-right">{recipe?.rating}</h6>
                </div>
                {/* <p className="text-xs leading-5 text-gray-500">Women Winter Wear</p> */}
            </div>
            <div className="absolute bottom-3 right-5">
                <button
                    className={`px-4 py-2 font-medium text-white rounded-md transition duration-150 ease-in-out bg-red-500`}
                    onClick={() => deleteRecipe(recipe._id)}
                >
                    {/* {user.isBlocked ? 'Unblock' : 'Block'} */}
                    Delete
                </button>
            </div>
        </div>
    )
}

export default MyRecipe