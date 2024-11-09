import { IRecipe } from "@/types"
import { Star } from "lucide-react"
import moment from "moment"
import Image from "next/image"
import parse from "html-react-parser";
import UserCard from "./UserCard";
import Link from "next/link";

const colors = {
    orange: "#F2C265",
    grey: "#D8D8D8"
}

const RecipeDetails2 = ({ recipe }: { recipe: IRecipe }) => {
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
        <div>
            {/* <!-- Blog post with featured image --> */}
            <div className="mx-auto flex items-start w-full">
                <div className="max-w-3xl mx-auto">
                    {/* <!-- Blog post header --> */}
                    <div className="py-8 space-y-2">
                        <h1 className="text-3xl font-bold mb-2">{recipe?.title}</h1>
                        <div className="flex gap-4">
                            <p className="text-gray-500 text-sm">Published on <time dateTime={recipe?.createdAt}>{moment(recipe?.createdAt).format("MMM Do YY")}</time></p>
                            <p className="text-gray-500 text-sm">Updated on <time dateTime={recipe?.updatedAt}>{moment(recipe?.updatedAt).format("MMM Do YY")}</time></p>
                        </div>
                        <p className=" text-sm">Author:
                            <Link href={`/user-dashboard/profile`} className="pl-3 underline text-blue-600">{recipe?.user?.name}</Link>
                        </p>
                        {/* Ratings */}
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

                    {/* <!-- Featured image --> */}
                    <Image className="w-full h-full object-cover" src={recipe?.image} alt="Product Image" height={400} width={400}
                        style={{ height: '500px', width: '100%', objectFit: 'cover' }}
                    />

                    {/* <!-- Blog post content --> */}
                    <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto my-8">
                        <p>{parse(recipe.desc)}</p>
                    </div>
                </div>
                <div className="max-w-3xl mx-auto pt-10 hidden lg:block">
                    <UserCard recipe={recipe} />
                </div>
            </div>
        </div>
    )
}

export default RecipeDetails2