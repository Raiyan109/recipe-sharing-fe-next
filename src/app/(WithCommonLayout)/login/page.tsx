'use client'
import Image from 'next/image'
import loginImg from '@/assets/login.jpg'
import ReusableForm from '@/components/form/ReusableForm'
import { useForm } from 'react-hook-form'
import { loginUser } from '@/services/AuthService'
import { useRouter } from 'next/navigation'
import { toast } from 'sonner'
import GlassSpinner from '@/components/shared/spinner/GlassSpinner'
import { useState } from 'react'


const Login = () => {
    // const { register } = useFormContext()
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()
    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        setIsLoading(true);
        try {
            loginUser(data)
            toast.success('User logged in successfully')
            router.push('/')
        } catch (error) {
            toast.error('Something wrong in login')
        } finally {
            setIsLoading(false);  // End loading
        }
    }

    return (
        <>
            {isLoading && <GlassSpinner />}
            <div className='w-full h-screen flex items-start'>
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
                            <h3 className='text-3xl font-semibold mb-4'>Login</h3>
                            <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
                        </div>

                        <ReusableForm onSubmit={handleSubmit(onSubmit)}>
                            <div className='w-full flex flex-col '>
                                <input type="email"
                                    {...register('email')}
                                    className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Email' />

                                <input type="password"
                                    {...register('password')}
                                    className='w-full text-black py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Password' />

                            </div>

                            <div className='w-full flex items-center justify-center'>
                                <div className='w-full flex'>
                                    <input type="checkbox" className='w-4 h-4 mr-2' />
                                    <p className='text-sm'>Remember Me for 30 days</p>
                                </div>
                                <p className='text-sm font-medium whitespace-nowrap underline underline-offset-2 cursor-pointer'>Forgot Password</p>
                            </div>

                            <div className="w-full flex flex-col my-4">
                                <button className='w-full bg-black rounded-md p-4 text-center flex items-center justify-center text-white'>Log in</button>
                            </div>
                        </ReusableForm>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <p className='text-sm font-normal'>Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login