'use client'
import { useDeleteReview } from "@/hooks/recipe.hook";
import { IRecipe, IReview } from "@/types";


const DeleteReview = ({ review, recipe }: { review: IReview, recipe: IRecipe }) => {

    const { mutate: handleDeleteReview } = useDeleteReview();

    const handleDelete = () => {
        if (!review._id || !recipe._id) {
            console.error("Review ID or Recipe ID is missing");
            return;
        }

        handleDeleteReview({
            recipeId: recipe?._id,
            reviewId: review?._id
        })
    }
    return (
        <div>
            <button type="submit"
                onClick={handleDelete}
                className="text-white bg-red-500 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-3 py-1">Delete Review</button>
        </div>
    )
}

export default DeleteReview