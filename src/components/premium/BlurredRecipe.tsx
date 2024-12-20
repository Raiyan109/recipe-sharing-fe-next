import { IRecipe } from '@/types'
import './blurredRecipe.css'
import Image from 'next/image'
import Link from 'next/link'


const BlurredRecipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div>

      <div className="p-4 bg-secondary rounded-md relative">
        <article>
          <div className="absolute -left-12 top-0 rounded-full">
            <Image
              src={recipe.user?.photo}
              width={40}
              height={40}
              alt="user photo"
              className="rounded-full"
            />
          </div>
          <h1 className="font-bold text-sm absolute top-2">{recipe.user?.name}</h1>
          <h1 className="font-semibold capitalize mb-4 mt-6">{recipe.title}</h1>
          <p className="blur-text">

          </p>
          <p className="blur-text fade-out">
            Donec et orci aliquet nisl suscipit molestie sed sit amet tortor. Duis vel urna ac mi sollicitudin lacinia mollis sit amet lorem. Sed finibus erat nec libero scelerisque fringilla. Morbi at orci sed urna vulputate vulputate. Nulla facilisi.
          </p>
        </article>

        <div id="paywall-wrapper" className="mt-8 p-6 rounded-lg shadow-lg relative mb-8 bg-card">
          <h4 className="text-lg font-semibold mb-2">Premium Recipe Subscription</h4>
          <p>Subscribe for <strong>$12.99/mo</strong> discount</p>
          <Link href={`/subscription/${recipe?._id}`} className="btn bg-primary text-card px-6 py-2 mt-4 inline-block rounded-lg">
            Subscribe Today!
          </Link>
        </div>
      </div>
    </div>
  )
}

export default BlurredRecipe