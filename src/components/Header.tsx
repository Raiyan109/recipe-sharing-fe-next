import { MenuIcon } from "lucide-react"


import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "./UI/avatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./UI/navigation-menu"

const Header = () => {
    return (
        <div className="sticky top-0">
            <header className="py-5">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <h1>Logo</h1>
                        <MenuIcon className="h-5 w-5 md:hidden" />
                        <nav className="hidden md:flex items-center gap-6 text-black/60">
                            <Link href='/'>Home</Link>
                            <Link href='/about'>About</Link>
                            <Link href='/features'>Features</Link>
                            <Link href='/updates'>Updates</Link>
                            <Link href='/help'>Help</Link>
                            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">Get for free</button>
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                                        <NavigationMenuContent>
                                            <NavigationMenuLink>Link</NavigationMenuLink>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>

                        </nav>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header