'use client'
import { IUser } from "@/types"
import Image from "next/image"



const UsersAvatar = ({ user }: { user: IUser }) => {
    console.log(user, 'from usersAvatar');

    return (
        <div className="flex flex-col items-center">
            {/* <Link href={{ pathname: '/search', query: { keyword: 'this way' } }}> */}
            <Image
                src={user.photo}
                height={60}
                width={60}
                alt='user image'
                className='rounded-full object-contain'
                onClick={() => console.log(user._id)}
            />
            {/* </Link> */}
            <h1>{user.name}</h1>
        </div>
    )
}

export default UsersAvatar