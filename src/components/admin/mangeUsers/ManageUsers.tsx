'use client'
import { IUser } from "@/types";
import ManageUser from "./ManageUser";
import { useState } from "react";
import Pagination from "@/components/shared/Pagination";

type IProps = {
    success: boolean;
    statusCode: number;
    message: string;
    data: IUser[];
}

const ManageUsers = ({ users }: { users: IProps }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 5; // Number of items per page
    // Calculate the current items to display
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users?.data?.slice(indexOfFirstItem, indexOfLastItem);

    // Calculate total pages
    const totalPages = Math.ceil(users?.data?.length / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
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
                    {currentUsers.map((user) => (
                        <ManageUser key={user?._id}
                            user={user}
                        />
                    ))}

                </tbody>
            </table>
            <div className="flex items-end justify-end">
                <Pagination handlePageChange={handlePageChange} currentPage={currentPage} totalPages={totalPages} />
            </div>
        </div>
    )
}

export default ManageUsers