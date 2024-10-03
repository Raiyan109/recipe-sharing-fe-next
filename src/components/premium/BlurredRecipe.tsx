import { IRecipe } from '@/types'
import './blurredRecipe.css'

const BlurredRecipe = ({ recipe }: { recipe: IRecipe }) => {
  return (
    <div className="p-8 bg-gray-50 rounded-md">
      <article>
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="blur-text">
          { }
        </p>
        <p className="blur-text fade-out">
          Donec et orci aliquet nisl suscipit molestie sed sit amet tortor. Duis vel urna ac mi sollicitudin lacinia mollis sit amet lorem. Sed finibus erat nec libero scelerisque fringilla. Morbi at orci sed urna vulputate vulputate. Nulla facilisi.
        </p>
      </article>

      <div id="paywall-wrapper" className="mt-8 p-6 rounded-lg shadow-lg relative mb-8 bg-white">
        <h4 className="text-lg font-semibold mb-2">Premium Recipe Subscription</h4>
        <p>Subscribe for <strong>$12.99/mth</strong> discount</p>
        <a className="btn bg-blue-500 text-white px-6 py-2 mt-4 inline-block rounded-lg" href="#">
          Subscribe Today!
        </a>
      </div>
    </div>
  )
}

export default BlurredRecipe