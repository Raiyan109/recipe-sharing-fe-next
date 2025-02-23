'use client'

import { IUser } from "@/types"
import Image from "next/image"
import Link from "next/link"

const Profile = ({ user }: { user: IUser }) => {

    return (
        <div>
            <div className="bg-card mr-4 md:mr-5 lg:mr-0">
                <div className="container mx-auto py-8">
                    <div className="grid grid-cols-4 lg:grid-cols-12 gap-6 px-4">
                        <div className="col-span-4 lg:col-span-3">
                            <div className="bg-secondary shadow rounded-lg p-6">
                                <div className="flex flex-col items-center">
                                    <Image
                                        src={user.photo}
                                        width={200}
                                        height={200}
                                        alt="user image"
                                        className="w-20 h-20 object-cover bg-secondary rounded-full mb-4 shrink-0">

                                    </Image>
                                    <h1 className="text-xl font-bold">{user.name}</h1>
                                    <p className="text-gray-700 dark:text-gray-300">{user.email}</p>
                                    {/* <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                        <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Contact</a>
                                        <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">Resume</a>
                                    </div> */}
                                </div>
                                <hr className="my-6 border-t border-gray-300" />
                                <div className="flex flex-col">
                                    <span className="text-primary font-bold mb-2 text-lg md:text-xl leading-5 lg:leading-none max-w-sm capitalize">Membership status</span>
                                    <span className="capitalize">{user.membership}</span>
                                    {/* <ul>
                                        <li className="mb-2">JavaScript</li>
                                        <li className="mb-2">React</li>
                                        <li className="mb-2">Node.js</li>
                                        <li className="mb-2">HTML/CSS</li>
                                        <li className="mb-2">Tailwind Css</li>
                                    </ul> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-span-4 lg:col-span-9">
                            <div className="bg-secondary shadow rounded-lg p-6">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg md:text-xl font-bold text-primary">About Me</h2>
                                    <div className="flex justify-center items-center">
                                        {/* w-fit */}
                                        <Link href='/user-dashboard/edit-profile' className="w-fit flex items-center justify-between gap-4 bg-primary hover:bg-primary/80 text-black font-medium py-1 px-3 rounded-full ease-in-out duration-100 text-xs md:text-sm lg:text-lg">
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                                <p className="text-gray-700 mt-4">{user?.bio}
                                </p>

                                <h2 className="text-lg md:text-xl font-bold mt-6 lg:mb-4 text-primary">Address</h2>
                                <h3>{user.address}</h3>


                                <h2 className="text-lg md:text-xl font-bold mt-6 lg:mb-4 text-primary">Phone</h2>
                                <h3>{user.phone}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile