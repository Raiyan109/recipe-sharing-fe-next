import ManageUsers from "@/components/admin/mangeUsers/ManageUsers";
import { getAllUsers } from "@/services/AuthService"


const page = async () => {
    const users = await getAllUsers()
    return (
        <div>
            <ManageUsers users={users} />
        </div>
    )
}

export default page