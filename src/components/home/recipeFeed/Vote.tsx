'use client'
import { useDownvote, useUpvote } from "@/hooks/vote.hook";
import { IRecipe } from "@/types"
import { ThumbsDown, ThumbsUp } from "lucide-react"


const Vote = ({ recipe }: { recipe: IRecipe }) => {
    const { mutate: handleUpVote } = useUpvote();
    const { mutate: handleDownVote } = useDownvote();

    const handleUpVoteIntoRecipe = (recipeId: string) => {
        handleUpVote({ recipeId: recipeId })
    }

    const handleDownVoteIntoRecipe = (recipeId: string) => {
        handleDownVote({ recipeId: recipeId })
    }
    return (
        <div>
            <h1 className="text-xl mb-4">Give a vote</h1>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-2">
                    {<ThumbsUp onClick={() => handleUpVoteIntoRecipe(recipe?._id)} className="cursor-pointer" />}

                    <ThumbsDown onClick={() => handleDownVoteIntoRecipe(recipe?._id)} className="cursor-pointer" />
                </div>
                <div className="text-xl">
                    {recipe.votes.length} votes
                </div>
            </div>
        </div>
    )
}

export default Vote