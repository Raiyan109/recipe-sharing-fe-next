import { IUser } from "@/types"
import UserAvatar2 from "./UserAvatar2"


const UserAvatars2 = ({ users }: { users: IUser[] }) => {
    return (
        <div className="flex flex-col bg-card rounded-2xl">

            <div className="p-5">
                <h2
                    className="text-lg font-medium tracking-tighter  lg:text-3xl pb-5"
                >
                    Members
                </h2>
                <div className="category-card__tags">
                    <ul className="category-tag flex flex-wrap gap-2">
                        {users?.slice(0, 4).map((user) => (
                            <UserAvatar2 user={user} key={user._id} />
                        ))}

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default UserAvatars2