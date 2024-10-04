'use client'
import { useFollow } from "@/hooks/follow.hook";
import { IUser } from "@/types"
import Image from "next/image"



const UsersAvatar = ({ user }: { user: IUser }) => {
    const { mutate: handleFollow } = useFollow();

    const handleFollowUser = () => {
        // Toggle isBlocked status
        handleFollow({ followeeId: user?._id });
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