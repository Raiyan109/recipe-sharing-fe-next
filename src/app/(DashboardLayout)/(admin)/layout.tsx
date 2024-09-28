import React, { ReactNode } from 'react'

const AdminLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div>AdminLayout
            {children}
        </div>
    )
}

export default AdminLayout