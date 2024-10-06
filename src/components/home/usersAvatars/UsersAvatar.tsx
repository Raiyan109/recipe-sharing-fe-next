/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useFollow, useUnfollow } from "@/hooks/follow.hook";
import { IUser } from "@/types"
import Image from "next/image"



const UsersAvatar = ({ user }: { user: IUser }) => {
    const { mutate: handleFollow } = useFollow();
    const { mutate: handleUnFollow } = useUnfollow();

    const handleFollowUser = () => {
        handleFollow({ followeeId: user?._id });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleUnFollowUser = () => {


        // handleUnFollow({ followeeId: user?._id });
    }
    return (
        <div className="flex flex-col items-center border border-gray-300 p-2 rounded-md h-32">
            {/* <Link href={{ pathname: '/search', query: { keyword: 'this way' } }}> */}
            <Image
                src={user.photo}
                height={60}
                width={60}
                alt='user image'
                className='rounded-full object-contain'

            />
            {/* </Link> */}
            <h1>{user.name}</h1>

            <button
                className={`px-3 py-1 text-xs font-medium text-white rounded-md transition duration-150 ease-in-out bg-red-400`}
                onClick={handleFollowUser}
            >
                Follow
            </button>
        </div>
    )
}

export default UsersAvatar