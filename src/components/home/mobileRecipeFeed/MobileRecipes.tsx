/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRecipe, IRecipes, IUser } from "@/types";
import MobileRecipe from "./MobileRecipe";

type IProps = {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean;
}

const MobileRecipes = ({ recipes, user }: { recipes: IRecipes, user: IProps }) => {
    return (
        <div className="mx-auto">
            <div className="space-y-5  py-5 px-5">
                {recipes?.data?.map((recipe: IRecipe) => {
                    return (
                        <MobileRecipe key={recipe._id} recipe={recipe} />
                    )
                })}
            </div>
        </div>
    )
}

export default MobileRecipes