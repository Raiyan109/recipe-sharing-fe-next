import Header from "@/components/Header"
import { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
        </div>
    )
}

export default CommonLayout 