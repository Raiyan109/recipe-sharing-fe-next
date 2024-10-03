import ResetPassword from '@/components/auth/ResetPassword'
import { getAnUser } from '@/services/AuthService'


const page = async () => {
    const userInfo = await getAnUser()
    console.log(userInfo);

    return (
        <div>
            <ResetPassword />
        </div>
    )
}

export default page