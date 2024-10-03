'use client'
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu"

const NavMenu = () => {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

export default NavMenu