import Subscribtion from '@/components/premium/Subscribtion';
import { getSingleRecipe } from '@/services/RecipeService';
import React from 'react'
interface RecipeId {
  params: {
    id: string;
  };
}
const DynamicSubscriptionRecipePage = async ({ params }: RecipeId) => {
  const recipe = await getSingleRecipe(params.id)
  return (
    <div>
      <Subscribtion recipe={recipe?.data} />
    </div>
  )
}

export default DynamicSubscriptionRecipePage