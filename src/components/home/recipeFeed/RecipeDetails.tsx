import { IRecipe, IReview } from "@/types"
import Image from "next/image"
import Reviews from "../reviews/Reviews";
import ReviewForm from "../reviews/ReviewForm";
import Vote from "./Vote";
import parse from "html-react-parser";
import { Star } from "lucide-react";
import UserCard from "./UserCard";
import Share from "./Share";


const colors = {
    orange: "#F2C265",
    grey: "#D8D8D8"
}


const RecipeDetails = ({ recipe }: { recipe: IRecipe }) => {
    const stars = Array(5).fill(0)

    const calculateReviewsAverage = () => {
        if (!recipe?.reviews || recipe.reviews.length === 0) {
            // Return 0 if there are no reviews
            return 0;
        }

        // Calculate the average rating safely
        const total = recipe.reviews.reduce((acc, review) => {
            return acc + (review.rating || 0); // Default rating to 0 if undefined
        }, 0);

        const average = total / recipe.reviews.length;
        return average > 0 ? average.toFixed(1) : "0";
    };

    const averageRating = calculateReviewsAverage();

    return (
        <div className="flex items-start">
            <div className="bg-gray-100 dark:bg-gray-800 py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col">
                        <div className="flex flex-col md:flex-row -mx-4">
                            <div className="md:flex-1 px-4">
                                <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
                                    <Image className="w-full h-full object-cover" src={recipe?.image} alt="Product Image" height={400} width={400} />
                                </div>
                                {/* <div className="flex -mx-2 mb-4">
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
                            </div>
                            <div className="w-1/2 px-2">
                                <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
                            </div>
                        </div> */}
                            </div>
                            <div className="md:flex-1 px-4 space-y-8">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 capitalize">{recipe?.title}</h2>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center">
                                            {averageRating && stars.map((_, index) => {
                                                return (
                                                    <Star
                                                        key={index}
                                                        size={18}
                                                        fill={parseInt(averageRating) > index ? colors.orange : colors.grey}
                                                        strokeWidth={0}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <div className="flex gap-1 font-bold uppercase text-xs">
                                            <div>
                                                {recipe.reviews?.length} Reviews
                                            </div>
                                            /
                                            <div>
                                                {averageRating} Average
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                                        {parse(recipe.desc)}
                                    </p>
                                </div>

                                <Vote recipe={recipe} />

                                <Share recipe={recipe} />


                                {/* <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 dark:text-gray-300">Rating:</span>
                                    <span className="text-gray-600 dark:text-gray-300">
                                        
                                        {recipe?.rating}
                                    </span>
                                </div>

                            </div> */}
                                {/* <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
                            <div className="flex items-center mt-2">
                                <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
                            </div>
                        </div>
                        <div className="mb-4">
                            <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
                            <div className="flex items-center mt-2">
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
                                <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
                            </div>
                        </div>
                        <div>
                            <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                                sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
                                lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
                                ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
                                sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
                            </p>
                        </div> */}
                            </div>

                        </div>
                        <div>
                            <h1 className="text-3xl py-5">Reviews</h1>
                            <div className="space-y-12">
                                {recipe.reviews?.map((review: IReview) => (
                                    <Reviews key={review._id} review={review} recipe={recipe} />
                                ))}
                            </div>
                        </div>
                        <div className="py-10">
                            <ReviewForm recipe={recipe} />
                        </div>
                    </div>
                </div>
            </div>
            <UserCard recipe={recipe} />
        </div>
    )
}

export default RecipeDetails