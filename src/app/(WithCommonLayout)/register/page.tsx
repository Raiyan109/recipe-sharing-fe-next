'use client'
import Image from 'next/image'
import loginImg from '@/assets/login.jpg'
import ReusableForm from '@/components/form/ReusableForm'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useUserRegistration } from '@/hooks/auth.hook'
import Link from 'next/link'

const Register = () => {
    const { mutate: handleUserRegistration } = useUserRegistration();

    const { register, handleSubmit } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            phone: '',
            role: 'user',
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
        <div className='w-full h-[calc(100vh-85px)] flex items-start'>
            <div className='relative w-1/2 h-full hidden lg:flex flex-col '>
                <div className='absolute top-[20%] left-[10%] flex flex-col'>
                    <h1 className='text-3xl text-white font-bold my-4'>Turn your ideas into reality</h1>
                    <p className='text-xl text-white font-normal'>Start for free and get attractive offers from the community</p>
                </div>
                <Image
                    src={loginImg}
                    height={400}
                    width={400}
                    alt='login image'
                    className='w-full h-full object-cover'
                />
            </div>

            <div className='w-full lg:w-1/2 h-full bg-white flex flex-col p-20 justify-between'>
                <h1 className='text-xl font-semibold'>Interactive Brand</h1>

                <div className='w-full flex flex-col max-w-[550px]'>
                    <div className="w-full flex flex-col mb-2">
                        <h3 className='text-3xl font-semibold mb-4'>Sign up</h3>
                        <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
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

                        <div className='w-full flex items-center justify-center mb-7'>
                            <div className='w-full flex'>
                                <input type="checkbox" className='w-4 h-4 mr-2' />
                                <p className='text-sm'>Remember Me for 30 days</p>
                            </div>
                            <p className='text-sm font-medium whitespace-nowrap underline underline-offset-2 cursor-pointer'>Forgot Password</p>
                        </div>

                        <div className="w-full flex flex-col my-4">
                            <button className='w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white'>Sign up</button>
                        </div>
                    </ReusableForm>
                </div>

                <div className='w-full flex items-center justify-center'>
                    <Link href='/login' className='text-sm font-normal'>Already have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Login here</span></Link>
                </div>
            </div>
        </div>
    )
}

export default Register