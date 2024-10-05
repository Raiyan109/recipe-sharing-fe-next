'use client'

import { useUpdateProfile } from "@/hooks/auth.hook";
import { IUser } from "@/types";

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import SmallSpinner from "../shared/spinner/SmallSpinner";


const Profile = ({ user }: { user: IUser }) => {
    const { mutate: handleUpdateProfile, isPending } = useUpdateProfile();

    const { register, handleSubmit } = useForm()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (!user?._id) {
            console.error("User ID is not available");
            return;
        }

        const updatedUserInfo = {
            name: data.name || user?.name,
            email: data.email || user?.email,
            password: data.password || user?.password,
            phone: data.phone || user?.phone,
            address: data.address || user?.address,
            membership: data.membership || user?.membership,
            bio: data.bio || user?.bio,
            photo: data.photo || user?.photo,
        }
        handleUpdateProfile({ id: user._id, payload: updatedUserInfo })
    }
    return (
        <div>
            <div className="flex justify-center mt-20 px-8">
                <form className="max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-wrap border shadow rounded-lg p-3 dark:bg-gray-600">
                        <h2 className="text-xl text-gray-600 dark:text-gray-300 pb-2">Account details:</h2>

                        <div className="flex flex-col gap-2 w-full border-gray-400">

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">User
                                    name
                                </label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    defaultValue={user?.name}
                                    {...register('name')}
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Email</label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    defaultValue={user?.email}
                                    {...register('email')}
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Password</label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="password"
                                    {...register('password')}
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Bio</label>
                                <textarea
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    defaultValue={user?.bio}
                                    {...register('bio')}
                                ></textarea>
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Phone</label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    defaultValue={user?.phone}
                                    {...register('phone')}
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Address</label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    defaultValue={user?.address}
                                    {...register('address')}
                                />
                            </div>

                            <div>
                                <label className="text-gray-600 dark:text-gray-400">Photo</label>
                                <input
                                    className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow dark:bg-gray-600 dark:text-gray-100"
                                    type="text"
                                    defaultValue={user?.photo}
                                    {...register('photo')}
                                />
                            </div>

                            <div className="flex justify-end">
                                <button
                                    className="py-1.5 px-3 m-1 text-center bg-violet-700 border rounded-md text-white  hover:bg-violet-500 hover:text-gray-100 dark:text-gray-200 dark:bg-violet-700"
                                    type="submit">
                                    {isPending ? (
                                        <div className="flex items-center gap-3">
                                            <SmallSpinner />
                                            Saving...
                                        </div>
                                    ) : 'Save changes'}
                                </button>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile