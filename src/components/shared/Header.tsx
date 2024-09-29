import { MenuIcon } from "lucide-react"
import Link from "next/link"
import NavMenu from "../UIComponents/NavMenu"
import { ThemeSwitch } from "./ThemeSwitch"
import SearchField from "./SearchField"


const Header = () => {
    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
                <Link href="/" className="text-2xl font-bold text-primary">
                    bugbook
                </Link>
                <SearchField />
                {/* <UserButton className="sm:ms-auto" /> */}
                <ThemeSwitch />
            </div>
        </header>
    )
}

export default Header