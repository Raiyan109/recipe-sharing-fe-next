import { IUser } from "@/types"
import Image from "next/image"
import avatarImg from '@/assets/avatar.png'
import { getAnUser } from "@/services/AuthService"
import { getFollowees } from "@/services/FollowService"
import FollowButton from "../follow/FollowButton"


const UserAvatar2 = async ({ user }: { user: IUser }) => {
    const anUser = await getAnUser()

    const followees = await getFollowees(anUser?.data?._id)
    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer hover:bg-accent hover:rounded-2xl transition-all duration-75 p-2">
                <div>
                    <Image
                        src={user?.photo ? user?.photo : avatarImg}
                        height={35}
                        width={35}
                        alt="avatar"
                        className="rounded-full object-contain"
                    />
                </div>
                <div className="hidden md:block">
                    <h3 className="text-sm font-bold">{user?.name}</h3>
                    <h3 className="text-sm text-gray-400">{user?.email}</h3>
                </div>
            </div>
            <div>
                <FollowButton userId={user?._id} followees={followees} />
            </div>
        </div>
    )
}

export default UserAvatar2