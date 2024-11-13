import { IUser } from "@/types"
import Image from "next/image"
import avatarImg from '@/assets/avatar.png'


const UserAvatar2 = async ({ user }: { user: IUser }) => {
    return (
        <div>
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
        </div>
    )
}

export default UserAvatar2