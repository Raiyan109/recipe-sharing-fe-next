import { IUser } from "@/types"
import Image from "next/image"
import Link from "next/link"


const UsersAvatar = ({ user }: { user: IUser }) => {
    return (
        <div className="flex flex-col items-center">
            <Link href={{ pathname: '/search', query: { keyword: 'this way' } }}>
                <Image
                    src={user.photo}
                    height={60}
                    width={60}
                    alt='user image'
                    className='rounded-full object-contain'
                />
            </Link>
            <h1>{user.name}</h1>
        </div>
    )
}

export default UsersAvatar