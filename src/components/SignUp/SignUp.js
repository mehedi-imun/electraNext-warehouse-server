import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';
import PageTitle from '../Shared/PageTittle/PageTitle';
import googleLogo from '../../images/google-logo.png'
import { useForm } from 'react-hook-form';
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SignUp = () => {
    let errorTag;
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    // update profile
    const [updateProfile] = useUpdateProfile(auth);
    // google sign up

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    // signup with email and password 
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // error 
    if (error) {

        errorTag = <p className='text-danger'>Error: {error.message}</p>;

    }
    // navigate user 
    if (user || googleUser) {
        // navigate(from, { replace: true });
    }

    // get input value and create user
    const { register, handleSubmit } = useForm();
    const onSubmit = async (data) => {
        const { name, email, password, confirmPassword } = data;
        if (password === confirmPassword) {
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName: name });
            await toast.success('successfully create account', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        } else {
            toast.error('password mismatch', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

    }


    // google auth
    const handleGoogleLogin = async () => {
        await signInWithGoogle()
        navigate(from, { replace: true });

    }
    return (
        <div className='w-50 mx-auto '>
            <PageTitle title='Sign Up'></PageTitle>
            <h4 className='text-center mt-5'>Sign Up</h4>
            <form className='d-flex flex-column mt-2 align-items-center' onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='mb-3  p-1 input-felid'
                    type='text'
                    {...register("name", { required: true })}
                    placeholder='Full Name'

                />
                <input
                    className='mb-3  p-1 input-felid'
                    type='email'
                    {...register("email", { required: true })}
                    placeholder='email'

                />
                <input type='password'
                    {...register("password", { required: true })}
                    placeholder='password'
                    className='mb-3  p-1 input-felid'
                />
                <input type='password'
                    {...register("confirmPassword", { required: true })}
                    placeholder='confirm password'
                    className='mb-3  p-1 input-felid'
                />
                {errorTag}

                <input type="submit" value='Sign Up' className='login-btn input-felid' />
            </form>
            <div className='d-flex flex-column align-items-center mt-1'>
                <p > if you already have account ? <Link
                    style={{ color: "#000" }}
                    to='/login'>login</Link>
                </p>
            </div>
            <div className='d-flex justify-content-center '>
                <button
                    onClick={() => handleGoogleLogin()}
                    className=' input-felid btn bold border
                '>
                    <img style={{ width: '40px' }} src={googleLogo} alt="" />
                    continue with google
                </button>
            </div>
            <ToastContainer
                position="top-right"
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

export default SignUp;