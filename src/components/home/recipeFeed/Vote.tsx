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
        <div className="mb-5">
            <div className="flex items-center gap-5  mb-4">
                <h1 className="text-3xl">Give a vote</h1>
                <p className="text-sm">
                    ({recipe.votes.length} votes)
                </p>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex items-center justify-center gap-2">
                    {<ThumbsUp onClick={() => handleUpVoteIntoRecipe(recipe?._id)} className="cursor-pointer" />}

                    <ThumbsDown onClick={() => handleDownVoteIntoRecipe(recipe?._id)} className="cursor-pointer" />
                </div>

            </div>
        </div>
    )
}

export default Vote