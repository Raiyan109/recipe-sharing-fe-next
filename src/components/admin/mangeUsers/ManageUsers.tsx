/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { IUser } from "@/types";
import ManageUser from "./ManageUser";
import { useEffect, useState } from "react";
import Pagination from "@/components/shared/Pagination";
import { getAllUsers } from "@/services/AuthService";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SlidersVertical } from "lucide-react";

type IProps = {
    success: boolean;
    statusCode: number;
    message: string;
    data: IUser[];
}
// { users }: { users: IProps }
const ManageUsers = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const itemsPerPage = 10; // Number of items per page
    const [users, setUsers] = useState<IProps | null>(null);
    const [role, setRole] = useState('');
    const [membership, setMembership] = useState('');
    const [sortBy, setSortBy] = useState('');

    const fetchUsers = async () => {
        const filters = {
            role,
            membership,
            sortBy,
        };
        const data = await getAllUsers(filters);
        setUsers(data);
    };

    useEffect(() => {
        fetchUsers();
    }, [role, membership, sortBy]);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentUsers = users?.data?.slice(indexOfFirstItem, indexOfLastItem) || [];
    const totalPages = Math.ceil((users?.data?.length || 0) / itemsPerPage);

    // Function to handle page change
    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
        }
    };
    return (
        <div>
            {/* Filters */}
            <div className="md:flex gap-4 mb-4 hidden">
                <select value={role} onChange={(e) => setRole(e.target.value)} className="border px-3 py-2">
                    <option value="">All Roles</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </select>
                <select value={membership} onChange={(e) => setMembership(e.target.value)} className="border px-3 py-2">
                    <option value="">All Statuses</option>
                    <option value="free">Free</option>
                    <option value="premium">Premium</option>
                </select>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-3 py-2">
                    <option value="">Sort By</option>
                    <option value="name:asc">Name (A-Z)</option>
                    <option value="name:desc">Name (Z-A)</option>
                    <option value="createdAt:asc">Date (Oldest)</option>
                    <option value="createdAt:desc">Date (Newest)</option>
                </select>
            </div>
            <div className="block md:hidden">
                <DropdownMenu>
                    <DropdownMenuTrigger className="">
                        <div className="bg-primary w-9 h-9 rounded-xl flex items-center justify-center mb-3">
                            <SlidersVertical size={27} className="text-grayText " />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="flex flex-col items-center justify-center">
                        <DropdownMenuLabel className="">
                            <select value={role} onChange={(e) => setRole(e.target.value)} className="border px-3 py-2">
                                <option value="">All Roles</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="">
                            <select value={membership} onChange={(e) => setMembership(e.target.value)} className="border px-3 py-2">
                                <option value="">All Statuses</option>
                                <option value="free">Free</option>
                                <option value="premium">Premium</option>
                            </select>
                        </DropdownMenuLabel>
                        <DropdownMenuLabel className="">
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="border px-3 py-2">
                                <option value="">Sort By</option>
                                <option value="name:asc">Name (A-Z)</option>
                                <option value="name:desc">Name (Z-A)</option>
                                <option value="createdAt:asc">Date (Oldest)</option>
                                <option value="createdAt:desc">Date (Newest)</option>
                            </select>
                        </DropdownMenuLabel>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <table className="w-fit md:min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Email</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Role</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">Action</th>
                    </tr>
                </thead>

                <tbody className="bg-white divide-y divide-gray-200 ">
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