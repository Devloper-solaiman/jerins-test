import React from 'react';
import icon_img from '../../assets/logo.png'
import g_icon from '../../assets/icons/Group 573.png'
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content text-center">
                <div className="max-w-md ">
                    <img className='w-40 ms-28 mb-14' src={icon_img} alt="" />
                    <h1 className='font-bold text-3xl text-center my-10 text-neutral'>Login With</h1>
                    <button className="btn btn-md gap-4 btn-outline rounded-full"><img className='w-6' src={g_icon} alt="#" /> <h1 className='px-20 lowercase text-xl'>Continue with Google</h1></button>

                    <p>Don’t have an account? <Link to='/register' className='text-primary cursor-pointer'>Create an account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;