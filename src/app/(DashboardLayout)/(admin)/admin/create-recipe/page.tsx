import CreateRecipeAdmin from '@/components/admin/createRecipe/CreateRecipeAdmin'
import { getAnUser } from '@/services/AuthService'


const CreateRecipeForAdmin = async () => {
    const user = await getAnUser()
    return (
        <div>
            <CreateRecipeAdmin user={user} />
        </div>
    )
}

export default CreateRecipeForAdmin