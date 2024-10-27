
import EditProfile from '@/components/user/EditProfile';
import { getAnUser } from '@/services/AuthService';
import React from 'react'

const EditProfilePage = async () => {
    const userInfo = await getAnUser()

    return (
        <div>
            <EditProfile user={userInfo?.data} />
        </div>
    )
}

export default EditProfilePage