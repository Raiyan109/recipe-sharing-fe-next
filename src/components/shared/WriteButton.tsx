import { IUser } from "@/types"
import { SquarePen } from "lucide-react"
import Link from "next/link"

interface IProps {
    data: IUser;
    message: string;
    statusCode: number;
    success: boolean
}
const WriteButton = ({ user }: { user: IProps }) => {
    console.log(user?.data?.role);

    return (
        <div>
            <Link href={user?.data?.role === 'user' ? `/user-dashboard/create-recipe` : '/admin/create-recipe'} className="hidden md:block">
                {/* /admin/create-recipe */}
                {/* /user-dashboard/create-recipe */}
                <button
                    className="bg-card-foreground/80 text-center w-32 rounded-2xl h-10 relative text-black  text-xl font-semibold group"
                    type="button"
                >
                    <div
                        className="bg-primary rounded-xl h-9 w-1/4 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[120px] z-10 duration-500"
                    >
                        <SquarePen />
                    </div>
                    <p className="translate-x-2 text-card">Write</p>
                </button>

            </Link>

            <Link href={user?.data?.role === 'user' ? `/user-dashboard/create-recipe` : '/admin/create-recipe'} className="block md:hidden">
                <div className="relative w-10 rounded-2xl h-10 text-center">
                    <div
                        className="bg-primary rounded-xl h-9 w-10 flex items-center justify-center absolute left-1 top-[2px] group-hover:w-[120px] z-10 duration-500"
                    >
                        <SquarePen />
                    </div>
                </div>


            </Link>
        </div>
    )
}

export default WriteButton