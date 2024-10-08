import ManageUsers from "@/components/admin/mangeUsers/ManageUsers";
import { getAllUsers } from "@/services/AuthService"


const ManageUsersPage = async () => {
    const users = await getAllUsers()
    return (
        <div>
            <ManageUsers users={users} />
        </div>
    )
}

export default ManageUsersPage