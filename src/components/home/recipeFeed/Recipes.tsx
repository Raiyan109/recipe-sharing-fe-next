import { LayoutList, Pizza, UtensilsCrossed } from "lucide-react"
import Link from "next/link"

const Recipes = ({ recipes }) => {
    return (
        <div className="">
            <div className="p-5 bg-gray-300 rounded-md">
                <div className="p-5 rounded-md mb-5">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <LayoutList size={20} />
                            All Topics
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <Pizza size={20} />
                            Street food
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                        <div className="flex items-center gap-2 bg-orange-200 px-3 py-3 rounded-full">
                            <UtensilsCrossed size={20} />
                            Restaurants
                        </div>
                    </div>
                </div>

                <div className="p-5 bg-gray-50 rounded-md h-96 w-full">

                </div>
                {/* <Link href={`/products/${product?._id}`} className='btn btn-primary'>Details</Link> */}
            </div>
        </div>
    )
}

export default Recipes