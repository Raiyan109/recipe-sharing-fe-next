import ResetPassword from '@/components/auth/ResetPassword'
import { getAnUser } from '@/services/AuthService'


const page = async () => {
    const userInfo = await getAnUser()
    return (
        <div>
            <ResetPassword user={userInfo} />
        </div>
    )
}

export default page