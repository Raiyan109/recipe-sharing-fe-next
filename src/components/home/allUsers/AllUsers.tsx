import Header from "@/components/shared/Header";
import AllUser from "./AllUser"
import { IUser } from "@/types";
import { getAnUser } from "@/services/AuthService";


const AllUsers = async ({ users }: { users: IUser[] }) => {
    const user = await getAnUser()
    return (
        <div>
            <Header user={user} />
            <div className="max-w-sm mx-auto mt-5 md:mt-40 px-5">
                <h1 className="text-3xl py-5">All Creators</h1>

                <div>
                    {users.map((user) => (
                        <AllUser key={user._id} user={user} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AllUsers