import AllUsers from "@/components/home/allUsers/AllUsers"
import { getAllUsers } from "@/services/AuthService"


const page = async () => {
    const users = await getAllUsers()
    return (
        <div>
            <AllUsers users={users?.data} />
        </div>
    )
}

export default page