import { IUser } from "@/types"

import Image from "next/image"


const MobileUserAvatar = ({ user }: { user: IUser }) => {
    return (
        <div>
            <div className="flex flex-col items-center -space-y-3">
                <Image
                    src={user.photo}
                    width={200}
                    height={200}
                    alt="user image"
                    className="w-16 h-16 object-cover bg-secondary rounded-full mb-4 shrink-0 border-primary border-4" />
                <h1>{user.name.length > 7 ? `${user.name.slice(0, 7)}...` : user.name}</h1>
            </div>
        </div>
    )
}

export default MobileUserAvatar