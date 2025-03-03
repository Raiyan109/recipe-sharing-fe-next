'use client'
import { useDownvote, useUpvote } from "@/hooks/vote.hook";
import { IRecipe } from "@/types"
import { ThumbsDown, ThumbsUp } from "lucide-react"


const VoteRecipe = ({ recipe }: { recipe: IRecipe }) => {
    const { mutate: handleUpVote } = useUpvote();
    const { mutate: handleDownVote } = useDownvote();

    const handleUpVoteIntoRecipe = (recipeId: string) => {
        handleUpVote({ recipeId: recipeId })
    }

    const handleDownVoteIntoRecipe = (recipeId: string) => {
        handleDownVote({ recipeId: recipeId })
    }
    return (
        <div className="">
            <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                    <ThumbsUp onClick={() => handleUpVoteIntoRecipe(recipe?._id)} className="cursor-pointer hover:text-primary transition-all duration-200" size={18} />
                    <p className="text-sm">
                        {recipe.votes.length}
                    </p>
                    <ThumbsDown onClick={() => handleDownVoteIntoRecipe(recipe?._id)} className="cursor-pointer hover:text-red-500 transition-all duration-2" size={18} />
                </div>

            </div>
        </div>
    )
}

export default VoteRecipe