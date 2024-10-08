import { getAnUser } from "@/services/AuthService"
import { CreateRecipe } from "../../../../../components/user/CreateRecipe"

const CreateRecipeUserPage = async () => {
    const user = await getAnUser()
    return (
        <div className=''>
            <CreateRecipe user={user} />
        </div>
    )
}

export default CreateRecipeUserPage