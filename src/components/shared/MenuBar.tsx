'use client'
import { Contact, Home, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";


interface MenuBarProps {
    className?: string;
}

// async
export default function MenuBar({ className }: MenuBarProps) {
    const pathname = usePathname()

    return (
        <div className={className}>
            <Button
                variant="ghost"
                className={`flex items-center justify-start gap-3 ${pathname === '/' ? 'bg-primary text-black' : ''}`}
                title="Home"
                asChild
            >
                <Link href="/">
                    <Home />
                    <span className="hidden lg:inline">Home</span>
                </Link>
            </Button>
            {/* <NotificationsButton
        initialState={{ unreadCount: unreadNotificationsCount }}
      />
      <MessagesButton initialState={{ unreadCount: unreadMessagesCount }} /> */}
            <Button
                variant="ghost"
                className={`flex items-center justify-start gap-3 ${pathname === '/home/about' ? 'bg-primary text-black' : ''}`}
                title="About"
                asChild
            >
                <Link href="/home/about">
                    <Users />
                    <span className="hidden lg:inline">About</span>
                </Link>
            </Button>

            <Button
                variant="ghost"
                className={`flex items-center justify-start gap-3 ${pathname === '/home/contact' ? 'bg-primary text-black' : ''}`}
                title="Contact Us"
                asChild
            >
                <Link href="/home/contact">
                    <Contact />
                    <span className="hidden lg:inline">Contact Us</span>
                </Link>
            </Button>
        </div>
    );
}