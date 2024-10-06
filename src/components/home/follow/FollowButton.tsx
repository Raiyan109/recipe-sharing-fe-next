'use client'

import { useFollow, useGetFollowees, useUnfollow } from "@/hooks/follow.hook";
import { IUser } from "@/types";


type IProps = {
    success: boolean,
    statusCode: number,
    message: string,
    data: IUser[]
}

const FollowButton = ({ userId, followees }: { userId: string, followees: IProps }) => {
    const { data } = useGetFollowees(userId);
    console.log(data);

    const followeesId = followees.data.map((f) => f?._id)
    const isFollowing = followeesId.includes(userId);

    const { mutate: handleFollow } = useFollow();
    const { mutate: handleUnFollow } = useUnfollow();


    const handleFollowUser = () => {
        handleFollow({ followeeId: userId });
    }

    const handleUnFollowUser = () => {
        handleUnFollow({ followeeId: userId });
    }

    return (
        <div>
            <button
                className={`px-3 py-1 text-xs font-medium text-white rounded-md transition duration-150 ease-in-out bg-red-400`}
                onClick={isFollowing ? handleUnFollowUser : handleFollowUser}
            >
                {isFollowing ? 'UnFollow' : 'Follow'}
            </button>
        </div>
    )
}

export default FollowButton