import Profile from '@/components/user/Profile'
import { getAnUser } from '@/services/AuthService';
import React from 'react'

const page = async () => {
    const userInfo = await getAnUser()

    return (
        <div>
            <Profile user={userInfo?.data} />
        </div>
    )
}

export default page