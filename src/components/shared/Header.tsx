'use client'
import Link from "next/link"
import { ThemeSwitch } from "./ThemeSwitch"

import UserDropdown from "./UserDropdown"

import { SearchInput } from "./SearchInput"
import { useSearchParams } from "next/navigation"
import WriteButton from "./WriteButton"
import { IUser } from "@/types"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { MoreVertical } from "lucide-react"

interface IProps {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean
}
const Header = ({ user }: { user: IProps }) => {
    const searchParams = useSearchParams()

    // Now get the query 

    const searchQuery = searchParams && searchParams.get("q");

    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-0 md:gap-5 px-5 py-3">
                <Link href="/" className="text-xl font-bold text-primary">
                    Culinary Circle
                </Link>
                <div className="flex items-center gap-10">
                    {/* <SearchField recipes={recipes} /> */}
                    <SearchInput defaultValue={searchQuery} />
                    {/* sm:ms-auto */}
                    <div className="hidden md:flex gap-2 md:gap-4 items-center">
                        {user && <div>
                            <WriteButton user={user} />
                        </div>}
                        <UserDropdown />
                        <ThemeSwitch />
                    </div>
                    <div className="flex md:hidden gap-2 md:gap-4 items-center">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <MoreVertical size={20} className="text-grayText" />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="flex flex-col items-center justify-center">
                                <DropdownMenuLabel className="">
                                    {user && (
                                        <div>
                                            <WriteButton user={user} />
                                        </div>
                                    )}
                                </DropdownMenuLabel>
                                <DropdownMenuLabel><UserDropdown /></DropdownMenuLabel>
                                <DropdownMenuLabel> <ThemeSwitch /></DropdownMenuLabel>

                            </DropdownMenuContent>
                        </DropdownMenu>



                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header