import { IRecipe } from "@/types"
import { Forward, Heart, MessagesSquare, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import parse from "html-react-parser";


const Recipe = ({ recipe }: { recipe: IRecipe }) => {
    // console.log(recipe?.reviews?.map((review) => review.rating));
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
        <div className=" relative bg-secondary p-3 rounded-md cursor-pointer">
            <Link href={`/recipe/${recipe?._id}`} className="flex flex-col gap-4">
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
                <h1 className="font-semibold capitalize text-xl">{recipe.title}</h1>
                <h1 className=" text-gray-600 font-medium">
                    {parse(recipe.desc)}
                </h1>
                <div className="w-full flex items-center justify-center">

                    <Image
                        src={recipe.image}
                        width={150}
                        height={150}
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
                            <h1 className="font-bold">{recipe?.votes?.length}</h1>
                            <h1 className="hidden md:block">Up votes</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <Star size={18} fill="#ffa200" strokeWidth={0} />
                            <h1 className="font-bold">{averageRating}</h1>
                            <h1 className="hidden md:block">Rating</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <Forward size={16} />
                            <h1 className="font-bold">55</h1>
                            <h1 className="hidden md:block">Share</h1>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center gap-1">
                            <MessagesSquare size={16} />
                            <h1 className="font-bold">
                                {recipe?.reviews?.length ? `${recipe.reviews.length} Comments` : "No Comments"}
                            </h1>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Recipe