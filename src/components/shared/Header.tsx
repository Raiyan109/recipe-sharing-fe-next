import Link from "next/link"
import { ThemeSwitch } from "./ThemeSwitch"
import SearchField from "./SearchField"
import UserDropdown from "./UserDropdown"
import { getRecipes } from "@/services/RecipeService"

const Header = async () => {
    const recipes = await getRecipes()

    return (
        <header className="sticky top-0 z-10 bg-card shadow-sm">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-3">
                <Link href="/" className="text-2xl font-bold text-primary">
                    bugbook
                </Link>
                <SearchField recipes={recipes} />
                {/* sm:ms-auto */}
                <div className="flex gap-4 items-center">
                    <UserDropdown />
                    <ThemeSwitch />
                </div>
            </div>
        </header>
    )
}

export default Header