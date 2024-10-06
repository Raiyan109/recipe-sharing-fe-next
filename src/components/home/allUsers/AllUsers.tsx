import Header from "@/components/shared/Header";
import AllUser from "./AllUser"
import { IUser } from "@/types";


const AllUsers = ({ users }: { users: IUser[] }) => {
    console.log(users);

    return (
        <div>
            <Header />
            <div className="max-w-sm mx-auto mt-40">
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