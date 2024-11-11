import { IRecipe } from '@/types'
import './latestBlurredRecipe.css'
import Image from 'next/image'
import Link from 'next/link'


const LatestBlurredRecipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="w-80 h-80 bg-card rounded-3xl  p-4 flex flex-col  gap-3 ">
            {/* hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow */}
            <div className="w-full h-40 flex items-center justify-center">
                <p className="blur-text-latest">

                </p>
                {/* <p className="blur-text-latest fade-out-latest">
  Donec et orci aliquet nisl suscipit molestie sed sit amet tortor. Duis vel urna ac mi sollicitudin lacinia mollis sit amet lorem. Sed finibus erat nec libero scelerisque fringilla. Morbi at orci sed urna vulputate vulputate. Nulla facilisi.
</p> */}
                <Image
                    src={recipe.image}
                    width={150}
                    height={150}
                    alt="recipe photo"
                    className="rounded-md blur-text-latest fade-out-latest"
                    style={{ width: '270px', height: '150px', objectFit: 'cover' }}
                />
            </div>

            <div className="">
                <p className="font-semibold capitalize text-xl">{recipe.title}</p>
                {/* <p className="font-medium text-card-foreground/50">{moment(recipe.createdAt).format("MMM Do YY")}</p> */}
                <div id="paywall-wrapper" className="mt-1 p-2 rounded-lg shadow-lg relative bg-card">
                    {/* <h4 className="text-lg font-semibold mb-2">Premium Recipe Subscription</h4> */}
                    <p>Subscribe to access premium recipe</p>
                    <Link href={`/subscription/${recipe?._id}`} className="flex items-center justify-center w-full px-6 py-2.5 text-center text-xs lg:text-xl duration-200 bg-primary text-black font-medium border-2 border-card rounded-full  focus:outline-none focus-visible:outline-black focus-visible:ring-black mt-2">

                        Subscribe!
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default LatestBlurredRecipe