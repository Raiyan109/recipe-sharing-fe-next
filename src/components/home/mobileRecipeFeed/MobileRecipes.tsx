/* eslint-disable @typescript-eslint/no-unused-vars */
import { IRecipes, IUser } from "@/types";

type IProps = {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean;
}

const MobileRecipes = ({ recipes, user }: { recipes: IRecipes, user: IProps }) => {
    return (
        <div>MobileRecipes</div>
    )
}

export default MobileRecipes