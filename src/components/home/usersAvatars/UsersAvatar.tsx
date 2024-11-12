/* eslint-disable @typescript-eslint/no-unused-vars */

import { getFollowees } from "@/services/FollowService";
import { IUser } from "@/types"
import Image from "next/image"
import FollowButton from "../follow/FollowButton";
import { getAnUser } from "@/services/AuthService";



const UsersAvatar = async ({ user }: { user: IUser }) => {
    const anUser = await getAnUser()

    const followees = await getFollowees(anUser?.data?._id)


    return (
        <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md h-32 w-32">
            {/* <Link href={{ pathname: '/search', query: { keyword: 'this way' } }}> */}
            <Image
                src={user.photo}
                height={60}
                width={60}
                alt='user image'
                className='rounded-full object-contain'
                unoptimized
            />
            {/* </Link> */}
            <h1>{user.name}</h1>

            <FollowButton userId={user?._id} followees={followees} />
        </div>
    )
}

export default UsersAvatar