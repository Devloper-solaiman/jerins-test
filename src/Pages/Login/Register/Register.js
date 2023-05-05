import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../../Share/Navbar/Navbar';
import g_icon from '../../../assets/icons/Group 573.png'
import { FaFacebook } from 'react-icons/fa'

const Register = () => {
    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen  ">
                <div className="hero-content flex-col lg:flex-row-reverse">

                    <div className="card flex-shrink-0 w-auto max-w-lg border border-gray-400 rounded-none bg-base-100">
                        <h1 className='font-bold text-xl text-start ms-10 pt-10'>Create an account</h1>
                        <div className="card-body">
                            <div className=" border-b-2 m-2">
                                <input type="text" placeholder="First Name" className="input input-sm w-96" />
                            </div>
                            <div className=" border-b-2 m-2">
                                <input type="text" placeholder="Last Name" className="input w-96 input-sm " />
                            </div>
                            <div className=" m-2 border-b-2">
                                <input type="text" placeholder="Username or Email" className="input w-96 input-sm" />
                            </div>
                            <div className=" m-2 border-b-2">
                                <input type="Passowrd" placeholder="Passowrd" className="input w-96 input-sm" />
                            </div>
                            <div className=" m-2 border-b-2">
                                <input type="Passowrd" placeholder="Confrim Passowrd" className="input w-96 input-sm" />
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary rounded-none">Create an account</button>

                                <p> Already have an account? <Link to='/login' className='text-primary cursor-pointer'>Login</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-full border-opacity-50">

                <div className="divider w-6/12 ms-96">OR</div>
                <div className='mb-20'>
                    <div className="grid  mt-10 card  place-items-center"> <button className="btn btn-md gap-4 btn-outline rounded-full"><img className='w-6' src={g_icon} alt="#" /> <h1 className='px-20 lowercase text-xl'>Continue with Google</h1></button></div>
                    <div className="grid h-16 card  place-items-center"> <button className="btn btn-md gap-4 btn-outline rounded-full"> <FaFacebook className='text-4xl' /> <h1 className='px-20 lowercase text-xl'>Continue with Google</h1></button></div>

                </div>
            </div>
        </div>
    );
};

export default Register;