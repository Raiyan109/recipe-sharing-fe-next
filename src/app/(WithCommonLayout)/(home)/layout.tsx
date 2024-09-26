import React, { ReactNode } from 'react'

const HomeLayout = ({ children, products }: { children: ReactNode, products: ReactNode }) => {
    return (
        <div>
            {children}
            {products}
        </div>
    )
}

export default HomeLayout