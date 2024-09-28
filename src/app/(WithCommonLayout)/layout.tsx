import Header from "@/components/Header"
import { ReactNode } from "react"

const CommonLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="container mx-auto px-8 md:px-0 bg-custom-radial overflow-x-hidden">
            <Header />
            {children}
        </div>
    )
}

export default CommonLayout 