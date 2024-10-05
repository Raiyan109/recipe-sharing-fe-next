'use client'

import { useCreateReview } from "@/hooks/review.hook";
import { IRecipe } from "@/types";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

const ReviewForm = ({ recipe }: { recipe: IRecipe }) => {

    const { mutate: handleCreateReview } = useCreateReview();

    const { register, handleSubmit } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data);

        handleCreateReview({
            recipeId: recipe?._id,
            review: data
        })
    }
    return (
        <div>
            <div className="p-4 mx-auto bg-white rounded-lg shadow-md max-w-4xl sm:p-6 grid grid-cols-1 gap-6">
                <div className="lg:col-span-4 col-span-1">
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="space-y-4">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            Write a review
                        </h2>
                        <div className="flex justify-start items-center space-x-1 mb-4">
                            <input type="number"
                                {...register('rating')}
                            />
                            {/* <input type="radio" id="5-stars" name="rating" value="5" className="hidden" />
                            <label className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            <input type="radio" id="4-stars" name="rating" value="4" className="hidden" />
                            <label className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            <input type="radio" id="3-stars" name="rating" value="3" className="hidden" />
                            <label className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            <input type="radio" id="2-stars" name="rating" value="2" className="hidden" />
                            <label className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label>
                            <input type="radio" id="1-star" name="rating" value="1" className="hidden" />
                            <label className="text-yellow-400 text-2xl cursor-pointer hover:scale-110">★</label> */}
                        </div>
                        <input
                            {...register('comment')}
                            className="block w-full p-3 text-sm text-gray-900 bg-gray-50 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Write your review" />
                        <div className="text-right py-4">
                            <button type="submit"
                                className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-3">Post Review</button>
                        </div>
                    </form>
                </div>
                {/* <div className="lg:col-span-2 hidden lg:flex flex-col space-y-4">
                    <div className="flex items-center">
                        <span className="text-yellow-400 text-xl">★★★★★</span>
                        <p className="ml-2 text-sm font-medium text-gray-900">0 out of 0</p>
                    </div>
                    <p className="text-sm font-medium text-gray-500">0 global ratings</p>
                    <div className="flex items-center mt-2">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">5 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">4 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">3 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">2 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                    <div className="flex items-center">
                        <span className="text-sm font-medium text-blue-600 hover:underline shrink-0">2 star</span>
                        <div className="w-3/4 h-4 mx-2 bg-gray-200 rounded">
                            <div className="h-4 bg-yellow-400 rounded" ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-500">0%</span>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default ReviewForm;