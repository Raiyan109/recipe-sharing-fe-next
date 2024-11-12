'use client'
import Image from 'next/image'
import loginImg from '@/assets/recipe-sharing-for-login.png'
import ReusableForm from '@/components/form/ReusableForm'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import { useRouter, useSearchParams } from 'next/navigation'
import GlassSpinner from '@/components/shared/spinner/GlassSpinner'
import { useEffect } from 'react'
import { useUserLogin } from '@/hooks/auth.hook'
import { useUser } from '@/context/user.provider'
import Link from 'next/link'
import GoBack from '@/components/GoBack'


const Login = () => {
    const router = useRouter()
    const { mutate: handleUserLogin, isPending, isSuccess } = useUserLogin();
    const { setIsLoading: userLoading } = useUser()

    const searchParams = useSearchParams()
    const redirect = searchParams.get('redirect')

    const { register, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleUserLogin(data);
        userLoading(true)
    }

    useEffect(() => {
        if (!isPending && isSuccess) {
            if (redirect) {
                router.push(redirect);
            } else {
                router.push("/");
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPending, isSuccess]);



    return (
        <>
            {isPending && <GlassSpinner />}
            <div className='w-full h-full md:h-screen flex items-start'>
                {/* <div className='relative w-1/2 h-full hidden lg:flex flex-col '>
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
                </div> */}
                <div
                    className="hidden flex-col justify-center overflow-hidden bg-cover bg-center lg:flex md:w-1/2 h-full"
                    style={{
                        backgroundImage: 'url(https://img.freepik.com/free-vector/gray-neural-network-illustration_53876-78764.jpg?size=626&ext=jpg)'
                    }}
                >
                    <Image
                        className="-translate-x-[8%] rounded-[36px] shadow-[0_24px_88px_rgba(0,0,0,0.55)]"
                        height={900}
                        width={900}
                        src={loginImg}
                        alt="Recipe Home page Mockup"
                    />
                </div>


                <div className='w-full lg:w-1/2 h-full bg-card flex flex-col p-10 md:p-20 justify-between gap-5 md:gap-0'
                >

                    <GoBack />
                    {/* <h1 className='text-xl font-semibold text-card'>Culinary Circle</h1> */}


                    <div className="bg-foreground/90 w-full md:w-96 h-36 md:h-40 rounded-lg">
                        <div className="flex p-2 gap-1">
                            <div className="">
                                <span className="bg-blue-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-purple-500 inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                            <div className="circle">
                                <span className="bg-pink-500 box inline-block center w-3 h-3 rounded-full"></span>
                            </div>
                        </div>
                        <div className="card__content px-2">
                            <h3 className='text-sm md:text-xl text-card font-semibold mb-1 md:mb-4'>Admin Credentials for test</h3>
                            <p className='text-base mb-1 md:mb-2 text-card'>Email: admin1@g.com</p>
                            <p className='text-base mb-0 md:mb-2 text-card'>Password: 1234567</p>
                        </div>
                    </div>


                    <div className='w-full flex flex-col max-w-[550px]'>
                        <div className="w-full flex flex-col mb-2">
                            <h3 className='text-3xl font-semibold mb-4'>Login</h3>
                            <p className='text-base mb-2'>Welcome Back! Please enter your details</p>
                        </div>

                        <ReusableForm onSubmit={handleSubmit(onSubmit)}>
                            <div className='w-full flex flex-col mb-5'>
                                <input type="email"
                                    {...register('email')}
                                    className='w-full  py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Email' />

                                <input type="password"
                                    {...register('password')}
                                    className='w-full  py-2 bg-transparent my-2 border-b border-black outline-none focus:outline-none' placeholder='Password' />

                            </div>

                            <div className='w-full flex items-center justify-end mb-7'>
                                {/* <div className='w-full flex'>
                                    <input type="checkbox" className='w-4 h-4 mr-2' />
                                    <p className='text-sm'>Remember Me for 30 days</p>
                                </div> */}
                                <Link href='/forget-password' className='text-sm font-medium whitespace-nowrap underline underline-offset-2 cursor-pointer'>Forgot Password?</Link>
                            </div>

                            <div className="w-full flex flex-col my-4">
                                <button className='w-full bg-primary font-bold text-lg rounded-md p-4 text-center flex items-center justify-center text-white'>Log in</button>
                            </div>
                        </ReusableForm>
                    </div>

                    <div className='w-full flex items-center justify-center'>
                        <Link href='/register' className='text-sm font-normal'>Do not have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer'>Sign up for free</span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login