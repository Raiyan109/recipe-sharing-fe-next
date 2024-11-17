import { IRecipe } from "@/types"
import Image from "next/image"
import './mobileRecipe.css'
import { Bookmark } from "lucide-react"
import Link from "next/link"


const MobileRecipe = ({ recipe }: { recipe: IRecipe }) => {
    return (
        <div className="border-b pb-5">
            <article className=" bg-card rounded-lg w-full mx-auto ">
                <footer className="card__footer flex gap-4 p-3 text-sm items-center justify-between">
                    <div className="card__job-summary flex items-center gap-3">
                        <div className="card__job-icon">
                            <Image
                                src={recipe.user.photo}
                                width={200}
                                height={200}
                                alt="user image"
                                className="w-10 h-10 object-cover bg-secondary rounded-full shrink-0" />
                        </div>
                        <div className="card__job">
                            <p className="card__job-title font-medium">
                                {recipe.user.name}
                            </p>
                        </div>
                    </div>
                    <div>
                        <Bookmark size={23} />
                    </div>

                    {/* <button className="card__btn w-full sm:w-auto font-normal border-none cursor-pointer text-center py-2 px-5 rounded-lg bg-[#141417] text-white text-base">
                        view
                    </button> */}
                </footer>
                <section className="card__hero bg-card text-sm rounded-lg">
                    <Link href={`/recipe/${recipe?._id}`}>
                        <div className="card-container rounded-lg p-4 cursor-pointer">
                            <div className="card">
                                <div className="img-content "
                                    style={{ backgroundImage: `url(${recipe.image})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                                >
                                    {/* <div className="absolute">
                                        <Image
                                            src={recipe.image}
                                            width={200}
                                            height={200}
                                            alt="user image"
                                            className=""
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div> */}

                                </div>
                                <div className="content">
                                    <p className="heading text-black">{recipe.title}</p>
                                    <p className="text-black/80 text-xl">
                                        {recipe.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>


            </article>

        </div>
    )
}

export default MobileRecipe