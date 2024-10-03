import UserSidebar, { SidebarItem } from '@/components/user/UserSidebar'
import { CookingPot, LayoutDashboard, LibraryBig, UserPen } from 'lucide-react'
import React, { ReactNode } from 'react'

const UserLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex items-start justify-start">
            <header className=" bg-secondary fixed z-20">
                <UserSidebar>
                    <SidebarItem
                        icon={<LayoutDashboard size={20} />}
                        text='Dashboard'
                        link='/user-dashboard'
                        alert
                    />
                    <SidebarItem
                        icon={<CookingPot size={20} />}
                        text='Create new recipe'
                        link='/user-dashboard/create-recipe'
                        alert
                    />
                    <SidebarItem
                        icon={<LibraryBig size={20} />}
                        text='My recipes'
                        link='/user-dashboard/my-recipes'
                        alert
                    />
                    <SidebarItem
                        icon={<UserPen size={20} />}
                        text='Profile'
                        link='/user-dashboard/profile'
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
                </UserSidebar>
            </header>
            <main className="py-8 pl-24 lg:px-52 w-full">
                {children}
            </main>
        </div>
    )
}

export default UserLayout