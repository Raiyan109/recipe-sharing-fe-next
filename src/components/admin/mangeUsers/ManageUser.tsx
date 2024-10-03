'use client'
import { useUpdateUserIsBlocked } from "@/hooks/auth.hook";
import { IUser } from "@/types"


const ManageUser = ({ user }: { user: IUser }) => {
    const { mutate: handleUpdateUserIsBlocked } = useUpdateUserIsBlocked();

    const handleBlock = () => {
        // Toggle isBlocked status
        handleUpdateUserIsBlocked({ id: user?._id, isBlocked: !user.isBlocked });
    }
    return (
        <tr >
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
            <td className="px-6 py-4 whitespace-nowrap capitalize">{user.role}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 capitalize">{user.membership}</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                {/* <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit</button> */}
                <button
                    className={`px-4 py-2 font-medium text-white rounded-md transition duration-150 ease-in-out ${user.isBlocked ? 'bg-green-600 hover:bg-green-500' : 'bg-red-600 hover:bg-red-500'
                        }`}
                    onClick={handleBlock}
                >
                    {user.isBlocked ? 'Unblock' : 'Block'}
                </button>
            </td>
        </tr>
    )
}

export default ManageUser