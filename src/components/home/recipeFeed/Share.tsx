'use client'
import { IRecipe } from "@/types"
import { FacebookShare } from 'react-share-kit';

const Share = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div>
            <h1 className="text-xl mb-4">Share</h1>
            {/* Facebook Share Button */}
            <FacebookShare url={shareUrl} quote={titleToShare} />
        </div>
    )
}

export default Share