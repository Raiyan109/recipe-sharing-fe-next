'use client'

import { useUser } from "@/context/user.provider"
import UserButton from "./UserButton"
import Link from "next/link"

const UserDropdown = () => {
    const { user } = useUser()
    return (
        <div>
            {user ?
                (<UserButton />) :
                (<Link href='/login'>Login</Link>)}
        </div>
    )
}

export default UserDropdown