import { IUser } from "@/types";
import UsersAvatar from "./UsersAvatar";
import Link from "next/link";


const UsersAvatars = ({ users }: { users: IUser[] }) => {
    return (
        <div className="px-5 py-3 bg-card rounded-2xl">
            <div className="flex justify-between items-center">
                <h1 className="text-xl md:text-3xl py-4">Popular creators</h1>
                <Link href='/all-users' className=" px-2 py-1 rounded-md font-medium text-primary text-sm md:text-xl">See All</Link>
            </div>
            <div className="flex gap-5 items-center justify-center flex-wrap py-5">
                {users?.slice(0, 4).map((user) => (
                    <UsersAvatar user={user} key={user._id} />
                ))}
            </div>
        </div>
    )
}

export default UsersAvatars