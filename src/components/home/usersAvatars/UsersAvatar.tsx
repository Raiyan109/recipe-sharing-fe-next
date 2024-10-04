import { IUser } from "@/types"
import Image from "next/image"


const UsersAvatar = ({ user }: { user: IUser }) => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <Image
                    src={user.photo}
                    height={60}
                    width={60}
                    alt='user image'
                    className='rounded-full object-contain'
                />
            </div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default UsersAvatar