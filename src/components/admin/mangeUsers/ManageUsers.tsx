import { IUser } from "@/types";
import ManageUser from "./ManageUser";

type IProps = {
    success: boolean;
    statusCode: number;
    message: string;
    data: IUser[];
}
const ManageUsers = ({ users }: { users: IProps }) => {
    return (
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200">
                    {users?.data?.map((user) => (
                        <ManageUser key={user?._id}
                            user={user}
                        />
                    ))}

                </tbody>
            </table>
        </div>
    )
}

export default ManageUsers