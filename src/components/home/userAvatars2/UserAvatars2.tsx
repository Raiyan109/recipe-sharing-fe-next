import { IUser } from "@/types"
import UserAvatar2 from "./UserAvatar2"
import Link from "next/link"


const UserAvatars2 = ({ users }: { users: IUser[] }) => {
    return (
        <div className="flex flex-col bg-card rounded-2xl">

            <div className="p-5">
                <h2
                    className="text-lg font-medium tracking-tighter  lg:text-3xl pb-5"
                >
                    Members
                </h2>
                <div className="">
                    <ul className="category-tag grid grid-cols-1 w-80 gap-2">
                        {users?.slice(0, 4).map((user) => (
                            <UserAvatar2 user={user} key={user._id} />
                        ))}

                    </ul>
                </div>
            </div>
            <Link href='/all-users' className=" pb-4 text-center font-bold text-primary text-sm md:text-xl underline">Show more</Link>
        </div>
    )
}

export default UserAvatars2