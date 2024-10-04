
import { Contact, Home, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";


interface MenuBarProps {
    className?: string;
}

export default async function MenuBar({ className }: MenuBarProps) {


    return (
        <div className={className}>
            <Button
                variant="ghost"
                className="flex items-center justify-start gap-3"
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
                className="flex items-center justify-start gap-3"
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
                className="flex items-center justify-start gap-3"
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