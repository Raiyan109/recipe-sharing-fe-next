import AdminSidebar, { SidebarItem } from '@/components/admin/AdminSidebar'
import { CookingPot, LayoutDashboard, UserRoundCog } from 'lucide-react'
import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-start justify-start">
            <header className=" bg-secondary fixed z-[999]">
                <AdminSidebar>
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        text='Dashboard'
                        link='/admin'
                        alert
                    />
                    <SidebarItem
                        icon={<CookingPot size={20} />}
                        text='Manage recipes'
                        link='/admin/manage-recipes'
                        alert
                    />

                    <SidebarItem
                        icon={<UserRoundCog size={20} />}
                        text='Manage users'
                        link='/admin/manage-users'
                        alert
                    />

                    {/* <SidebarItem
                    icon={<MdSportsHandball size={20} />}
                    text='All Facilities'
                    link='/admin-dashboard/facilities-table'
                    alert
                />
                <SidebarItem
                    icon={<MdCreateNewFolder size={20} />}
                    text='Create Facility'
                    link='/admin-dashboard/create-facility'
                    alert
                />
                <SidebarItem
                    icon={<BookCheck size={20} />}
                    text='Booking Management'
                    link='/admin-dashboard/all-bookings'
                    alert
                />
                <SidebarItem
                    icon={<ShieldPlus size={20} />}
                    text='Add an Admin'
                    link='/admin-dashboard/make-admin'
                    alert
                /> */}
                </AdminSidebar>
            </header>
            <main className="py-8 pl-24 lg:px-52 w-full">
                {children}
            </main>
        </div>
    )
}

export default AdminLayout