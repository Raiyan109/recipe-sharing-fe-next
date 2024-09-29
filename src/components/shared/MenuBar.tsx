
import { Bookmark, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "../UI/button";


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
                title="Bookmarks"
                asChild
            >
                <Link href="/bookmarks">
                    <Bookmark />
                    <span className="hidden lg:inline">Bookmarks</span>
                </Link>
            </Button>
        </div>
    );
}