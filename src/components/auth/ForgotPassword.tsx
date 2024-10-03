'use client'
import { useForgetPassword } from '@/hooks/auth.hook';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';



const ForgotPassword = () => {
    const { mutate: handleForgetPassword, isPending } = useForgetPassword();

    const { register, handleSubmit } = useForm({})

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        handleForgetPassword(data)
    }



    return (
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email Address
                    </label>
                    <input
                        type="email"
                        {...register('email')}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isPending}
                >
                    {isPending ? 'Sending...' : 'Send Reset Link'}
                </button>
            </form>
        </div>
    );
};

export default ForgotPassword;
