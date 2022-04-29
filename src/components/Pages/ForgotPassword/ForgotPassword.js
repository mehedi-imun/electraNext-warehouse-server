import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../Firebase.init';
import PageTitle from '../../Shared/PageTittle/PageTitle';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgotPassword = () => {
    const [sendPasswordResetEmail, error] = useSendPasswordResetEmail(
        auth
    );
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const { email } = data;
        await sendPasswordResetEmail(email)
        if (!error) {
            toast.success('sent mail', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }


    };
    return (
        <div>
            <PageTitle title='forgot password'></PageTitle>
            <h3 className='text-center mt-5 mb-2'>forgot password</h3>
            <form className='d-flex flex-column mt-2 align-items-center container' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='mb-3  p-1 input-felid'
                    type='email'
                    {...register("email", { required: true })}
                    placeholder='email'

                />
                {error?.message}
                <input type="submit" value='forgot password' className='login-btn input-felid' />
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default ForgotPassword;