'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useDeleteUser, useUpdateUserIsBlocked } from "@/hooks/auth.hook";
import { IUser } from "@/types"
import { MoreVertical } from "lucide-react";


const ManageUser = ({ user }: { user: IUser }) => {
    const { mutate: handleUpdateUserIsBlocked } = useUpdateUserIsBlocked();
    const { mutate: handleDeleteUser } = useDeleteUser();

    const handleBlock = () => {
        // Toggle isBlocked status
        handleUpdateUserIsBlocked({ id: user?._id, isBlocked: !user.isBlocked });
    }

    const handleDelete = () => {
        handleDeleteUser({ id: user?._id });
    }


    return (
        <tr className="md:table-row flex flex-row justify-between border-b border-gray-200 md:border-0 mb-2 md:mb-0">
            {/* Name Column */}
            <td className="px-6 py-4 whitespace-nowrap text-sm">
                <div className="font-semibold">{user.name}</div>
                {/* Display email below the name on mobile screens */}
                <div className="text-gray-500 md:hidden">{user.email}</div>
            </td>

            {/* Email Column (hidden on mobile) */}
            <td className="px-6 py-4 whitespace-nowrap text-sm hidden md:table-cell">{user.email}</td>

            {/* Role Column (hidden on mobile) */}
            <td className="px-6 py-4 whitespace-nowrap capitalize hidden md:table-cell">{user.role}</td>

            {/* Status Column (hidden on mobile) */}
            <td className="px-6 py-4 whitespace-nowrap hidden md:table-cell">
                <span className={`px-2 inline-flex text-xs font-semibold rounded-full ${user.membership === 'premium' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {user.membership}
                </span>
            </td>

            {/* Action Buttons (displayed as a single button on mobile) */}
            <td className="flex gap-2 md:table-cell md:px-6 md:py-4 whitespace-nowrap space-x-4">
                {/* Block/Unblock Button */}
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <MoreVertical size={20} className="text-grayText" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-center justify-center">
                        <DropdownMenuLabel className="flex flex-col gap-2">
                            <button
                                className={`px-4 py-2 text-white rounded-md transition duration-150 ease-in-out ${user.isBlocked ? 'bg-primary hover:bg-primary/80' : 'bg-red-500 hover:bg-red-400'}`}
                                onClick={handleBlock}
                            >
                                {user.isBlocked ? 'Unblock' : 'Block'}
                            </button>
                            {/* Delete Button (hidden on mobile) */}
                            <button
                                className=" px-4 py-2 bg-destructive hover:bg-destructive/80 text-white rounded-md"
                                onClick={handleDelete}
                            >
                                Delete
                            </button>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>

            </td>
        </tr>

    )
}

export default ManageUser