'use client'
import Head from 'next/head';

import { IRecipe } from '@/types';
import { FacebookShare } from 'react-share-kit';

const Share = ({ recipe }: { recipe: IRecipe }) => {


    return (
        <div>
            <Head>
                <title>{recipe.title}</title>
                <meta property="og:url" content={`https://recipe-sharing-fe-next.vercel.app/recipe/${recipe._id}`} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={recipe.title} />
                <meta property="og:description" content={recipe.desc} />
                <meta property="og:image" content={recipe.image} />
                <meta property="og:image:alt" content={`Image of ${recipe.title}`} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
            </Head>
            <h1 className="text-xl mb-4">Share</h1>

            <FacebookShare
                url={`https://recipe-sharing-fe-next.vercel.app/recipe/${recipe._id}`}
                quote={`Check out this recipe: ${recipe.title}!`}
                hashtag="#recipes"
            />
        </div>
    )
}

export default Share