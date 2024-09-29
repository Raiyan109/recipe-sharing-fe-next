import React, { ReactNode } from 'react'

const UserLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>UserLayout
            {children}
        </div>
    )
}

export default UserLayout