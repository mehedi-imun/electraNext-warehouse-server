import React from 'react';
import { useForm } from 'react-hook-form';
import {useSignInWithEmailAndPassword, useSignInWithGoogle  } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../../images/google-logo.png'
import PageTitle from '../../Shared/PageTittle/PageTitle';
import './Login.css'
import auth from '../../../Firebase.init';

const Login = () => {
    let errorTag;
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    // google signup 
    const [signInWithGoogle, 
        googleUser, googleLoading, 
        googleError] = useSignInWithGoogle(auth);

    // sign in with email and pass auth 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // get input value and log in user
    const { register, handleSubmit } = useForm();
    const onSubmit =async (data) => {
        const {email,password} = data;
        await signInWithEmailAndPassword(email, password)

    };

    // loading
    if (googleLoading || loading) {
        return <p>loading..</p>
    }
       // error tag 

    if (error) {

        errorTag = <p className='text-danger'>Error: {error.message}</p>;

    }
    if(user ||googleUser){
        navigate(from, { replace: true });
        
    }

    

    // google auth
    const handleGoogleLogin = async () => {
        await signInWithGoogle()
        navigate(from, { replace: true });

    }
    return (
        
        <div className='w-50 mx-auto '>
            <PageTitle title='login'></PageTitle>
            <h4 className='text-center mt-5'>Log in</h4>
            <form className='d-flex flex-column mt-2 align-items-center' onSubmit={handleSubmit(onSubmit)}>
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
                {errorTag}

                <input type="submit" value='Login' className='login-btn input-felid' />
            </form>
            <div className='d-flex flex-column align-items-center mt-1'>
                <p>
                    <Link style={{ color: '#000' }} to='/forgotPassword'>forgot password ?</Link>
                </p>
                <p > if you don't have account ? <Link
                    style={{ color: "#000" }}
                    to='/signup'>signup</Link>
                </p>
            </div>
            <div className='d-flex justify-content-center '>
                <button
                    onClick={()=>handleGoogleLogin()}
                    className=' input-felid btn bold border
                '>
                    <img style={{ width: '40px' }} src={googleLogo} alt="" />
                    continue with google
                </button>
            </div>
            
        </div>
    );
};

export default Login;