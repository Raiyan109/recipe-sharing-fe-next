import { IUser } from "@/types";
import UsersAvatar from "./UsersAvatar";


const UsersAvatars = ({ users }: { users: IUser[] }) => {
    return (
        <div className="flex gap-9 items-center justify-center flex-wrap py-5">
            {users?.map((user) => (
                <UsersAvatar user={user} key={user._id} />
            ))}
        </div>
    )
}

export default UsersAvatars