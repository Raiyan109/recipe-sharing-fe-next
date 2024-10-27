import { getAnUser } from "@/services/AuthService"
import { getFollowees } from "@/services/FollowService"
import { IRecipe } from "@/types"
import Image from "next/image"
import FollowButton from "../follow/FollowButton"


const UserCard = async ({ recipe }: { recipe: IRecipe }) => {
    const anUser = await getAnUser()

    const followees = await getFollowees(anUser?.data?._id)
    return (
        <div
            className="relative rounded-xl overflow-hidden flex flex-col items-center shadow-lg bg-white font-Roboto-light"
        >
            <div className="h-24 w-full bg-primary"></div>
            <div className="top-16 z-10 flex items-center flex-col gap-4 px-5 py-5">
                <div className="-mt-20">
                    <Image className="w-full h-full object-cover rounded-full" src={recipe?.user?.photo} alt="Product Image" height={80} width={80} />
                </div>

                <div className="flex items-center flex-col">
                    <p title="name" className="text-black font-Roboto-md">{recipe?.user?.name}</p>
                    <p title="bio" className="text-xs text-gray-500 font-medium max-w-xs">
                        {recipe?.user?.bio}
                    </p>
                </div>

                <div className="flex items-center gap-3">
                    {/* <button
                        className="bg-primary transition-all gradient text-[15px] text-white px-3 py-[6px] rounded-full flex items-center gap-1"
                    >
                        Followed
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 12.75 6 6 9-13.5"
                            ></path>
                        </svg>
                    </button> */}
                    <FollowButton userId={anUser?.data?._id} followees={followees} />
                    <button
                        className="bg-gray-200/65 hover:bg-gray-200 transition-colors p-2 rounded-full"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                            ></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UserCard