'use client'

import Link from "next/link"
import { ThemeSwitch } from "./ThemeSwitch"
import SearchField from "./SearchField"
import UserButton from "./UserButton"
import { useUser } from "@/context/user.provider"


const Header = () => {
    const { user } = useUser()

    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
                <Link href="/" className="text-2xl font-bold text-primary">
                    bugbook
                </Link>
                <SearchField />
                {/* sm:ms-auto */}
                <div className="flex gap-4 items-center">
                    {user ?
                        (<UserButton />) :
                        (<Link href='/login'>Login</Link>)}
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    )
}

export default Header