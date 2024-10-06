import { getAnUser } from "@/services/AuthService"
import { getFollowees } from "@/services/FollowService"
import { IUser } from "@/types"
import Image from "next/image"
import FollowButton from "../follow/FollowButton"


const AllUser = async ({ user }: { user: IUser }) => {
    const anUser = await getAnUser()

    const followees = await getFollowees(anUser?.data?._id)
    return (
        <div className="p-3 flex items-center justify-between border-t cursor-pointer hover:bg-gray-200">
            <div className="flex items-center">
                <Image
                    className="rounded-full h-10 w-10" src={user.photo}
                    height={50}
                    width={50}
                    alt="user image"
                />
                <div className="ml-2 flex flex-col">
                    <div className="leading-snug text-sm text-gray-900 font-bold">{user.name}</div>
                    <div className="leading-snug text-xs text-gray-600">{user.email}</div>
                </div>
            </div>
            <FollowButton userId={user?._id} followees={followees} />
        </div>
    )
}

export default AllUser