'use client'
import { useUpvote } from "@/hooks/vote.hook";
import { IRecipe } from "@/types"
import { ThumbsUp } from "lucide-react"


const VoteRecipe = ({ recipe, userId }: { recipe: IRecipe, userId: string }) => {
    const isUserVote = recipe.votes.includes(userId);

    const { mutate: handleUpVote } = useUpvote();
    // const { mutate: handleDownVote } = useDownvote();

    const handleUpVoteIntoRecipe = (recipeId: string) => {
        handleUpVote({ recipeId: recipeId })
    }

    // const handleDownVoteIntoRecipe = (recipeId: string) => {
    //     handleDownVote({ recipeId: recipeId })
    // }

    return (
        <div className="">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    {isUserVote ? (
                        <ThumbsUp onClick={() => handleUpVoteIntoRecipe(recipe?._id)} className="cursor-pointer text-orange-300 hover:text-primary transition-all duration-200" size={18} fill="orange" />
                    ) : (
                        <ThumbsUp onClick={() => handleUpVoteIntoRecipe(recipe?._id)} className="cursor-pointer  hover:text-primary transition-all duration-200" size={18} />
                    )}
                    <p className="flex items-center gap-1">
                        <span className="font-bold">{recipe.votes.length}</span>
                        <h1 className="hidden md:block">Upvotes</h1>
                    </p>
                    {/* <ThumbsDown onClick={() => handleDownVoteIntoRecipe(recipe?._id)} className="cursor-pointer hover:text-red-500 transition-all duration-2" size={18} /> */}
                </div>

            </div>
        </div>
    )
}

export default VoteRecipe