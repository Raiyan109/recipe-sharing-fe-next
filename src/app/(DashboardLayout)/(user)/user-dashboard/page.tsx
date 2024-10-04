
import UserDashboard from '@/components/user/UserDashboard'
import { getAnUser } from '@/services/AuthService';
import React from 'react'

const Profile = async () => {
    const user = await getAnUser()
    return (
        <div>
            <UserDashboard user={user?.data} />
        </div>
    )
}

export default Profile