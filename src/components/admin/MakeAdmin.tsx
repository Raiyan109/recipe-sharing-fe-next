'use client'

import { useUserRegistration } from "@/hooks/auth.hook";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ReusableForm from "../form/ReusableForm";

const MakeAdmin = () => {
    const { mutate: handleUserRegistration } = useUserRegistration();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            role: 'admin',
            address: '',
            membership: 'free',
            photo: '',
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const userData = {
            ...data,
            photo: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
        }


        handleUserRegistration(userData)
    }
    return (
        <div className='flex items-center justify-center pr-5'>
            <div className=' bg-white flex flex-col p-20 justify-center'>


                <div className='w-full flex flex-col max-w-[550px]'>
                    <div className="w-full flex flex-col mb-2">
                        <h3 className='text-3xl font-semibold mb-4'>Make admin</h3>

                    </div>

                    <ReusableForm onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full flex flex-col mb-5 '>
                            <input type="text"
                                {...register('name')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Name' />

                            <input type="email"
                                {...register('email')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Email' />

                            <input type="password"
                                {...register('password')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Password' />

                            <input type="text"
                                {...register('phone')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Phone' />

                            <input type="text"
                                {...register('address')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Address' />

                            <input type="text"
                                {...register('photo')}
                                className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Photo' />

                        </div>



                        <div className="w-full flex flex-col my-4">
                            <button className='w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white'>Submit</button>
                        </div>
                    </ReusableForm>
                </div>

            </div>
        </div>
    )
}

export default MakeAdmin