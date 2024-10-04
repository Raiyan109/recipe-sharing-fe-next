/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useFollow, useUnfollow } from "@/hooks/follow.hook";
import { IUser } from "@/types"
import Image from "next/image"



const UsersAvatar = ({ user }: { user: IUser }) => {
    console.log(user);

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
        <div className="flex flex-col items-center">
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
                className={`px-4 py-2 font-medium text-white rounded-md transition duration-150 ease-in-out bg-red-400`}
                onClick={handleFollowUser}
            >
                Follow
            </button>
        </div>
    )
}

export default UsersAvatar