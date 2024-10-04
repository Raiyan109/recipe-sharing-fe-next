'use client'
import { useResetPassword } from '@/hooks/auth.hook';
import { IUser } from '@/types';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';



const ResetPassword = ({ user }: { user: IUser }) => {
    const { mutate: handleResetPassword, isPending } = useResetPassword();

    const { register, handleSubmit } = useForm({})

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        // const token = new URLSearchParams(window.location.search).get("token");
        // console.log(token, 'token fromresetpassword compo');

        // console.log(data, 'data onsubmit');

        const payload = {
            email: user.email,
            newPassword: data
        }

        // console.log(payload, 'payload');

        handleResetPassword(payload)
    }



    return (
        <div className="container mx-auto py-12">
            <h2 className="text-2xl font-bold mb-4">Reset Password</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-sm font-medium">
                        New password
                    </label>
                    <input
                        type="password"
                        {...register('password')}
                        className="w-full p-2 border border-gray-300 rounded"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={isPending}
                >
                    {isPending ? 'Reset...' : 'Password reset done'}
                </button>
            </form>
        </div>
    );
};

export default ResetPassword;
