import { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="">
            {children}
        </div>
    )
}

export default CommonLayout 