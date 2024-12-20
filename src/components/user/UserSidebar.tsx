'use client'

import { createContext, ReactNode, useContext, useState } from "react"

import { ArrowLeft, ChevronLeft, ChevronRight, MoreVertical, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useUser } from "@/context/user.provider";
import { logout } from "@/services/AuthService";
import Link from "next/link";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";
import Image from "next/image";


// Define the shape of your context value
interface SidebarContextProps {
    expanded: boolean;
    setExpanded: (expanded: boolean) => void;
}

// Provide a default value for createContext
const SidebarContext = createContext<SidebarContextProps>({
    expanded: true, // default value
    setExpanded: () => { }, // dummy function for default
});


const UserSidebar = ({ children }: { children: ReactNode }) => {
    const [expanded, setExpanded] = useState(true)
    const { user, setIsLoading: userLoading } = useUser();
    const router = useRouter()

    const handleLogout = () => {
        logout();
        userLoading(true);
        router.push('/login')
    }

    return (
        <aside className="h-screen">
            <nav className="h-full flex flex-col gap-10 border-r shadow-sm">
                <div className="p-4 pb-2 flex justify-between items-center">
                    {/* Header */}
                    <div className={`overflow-hidden transition-all w-0  ${expanded ? "w-32" : "w-0"
                        }`}>
                        {/* <FaUser size={40} className="text-grayText" />
                        <p className="font-semibold text-grayText">User</p> */}
                        <div className="flex justify-center items-center">
                            {/* w-fit */}
                            <Link href='/' className="w-fit flex items-center justify-between gap-4 bg-primary hover:bg-primary/80 text-card font-medium py-2 px-3 rounded-full ease-in-out duration-100">
                                <ArrowLeft />
                                Back
                            </Link>
                        </div>
                    </div>
                    <hr />
                    <button
                        onClick={() => setExpanded((curr) => !curr)}
                        className={`p-1.5 rounded-md bg-primary hover:bg-primary/80 transition-all duration-100 text-card ${expanded ? '-mr-7' : 'ml-0'}`}
                    >
                        {expanded ? <ChevronLeft /> : <ChevronRight />}
                    </button>
                </div>

                <SidebarContext.Provider value={{ expanded, setExpanded }}>
                    <ul className="flex-1 px-3 space-y-3">{children}</ul>
                </SidebarContext.Provider>

                <div className="border-t flex items-center justify-center p-3">
                    {user ? (
                        <Image
                            src={user?.photo}
                            height={40}
                            width={40}
                            alt="user photo"
                            className="rounded-full"
                        />
                    ) : (
                        <User size={40} className="text-card" />
                    )}
                    <div
                        className={`
                flex justify-between items-center
                overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
            `}
                    >
                        <div className="">
                            <h4 className="font-semibold text-primary text-xl">{user?.name}</h4>
                            <span className="text-xs text-gray-600">{user?.email}</span>
                        </div>
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreVertical size={20} className="text-grayText" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel onClick={handleLogout}>Logout</DropdownMenuLabel>
                            </DropdownMenuContent>
                        </DropdownMenu>

                    </div>
                </div>
            </nav>
        </aside>
    )
}

interface SidebarItemProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    icon: any;
    text: string;
    alert?: boolean;
    link: string;
    active?: boolean; // Make this optional
}

export function SidebarItem({ icon, text, alert, link }: SidebarItemProps) {
    const { expanded } = useContext(SidebarContext)
    const pathname = usePathname()

    const isActive = pathname === link

    return (
        <Link
            href={link}
            className={`
          relative flex items-center justify-center ${expanded ? 'py-2 px-3' : 'py-0 px-0'} my-1
          font-medium rounded-md cursor-pointer
          transition-colors group
          ${isActive
                    ? "bg-primary text-black"
                    : "hover:bg-primary text-black dark:text-white"
                }
      `}
        >
            {icon}
            <span
                className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                    }`}
            >
                {text}
            </span>
            {alert && (
                <div
                    className={`absolute right-2 w-2 h-2 rounded bg-primary ${expanded ? "" : "top-2"
                        }`}
                />
            )}

            {!expanded && (
                <div
                    className={`
            absolute left-full rounded-md px-2 py-1 ml-6
            bg-primary text-card text-sm
            invisible opacity-20 -translate-x-3 transition-all
            group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
        `}
                >
                    {text}
                </div>
            )}
        </Link>
    )
}

export default UserSidebar