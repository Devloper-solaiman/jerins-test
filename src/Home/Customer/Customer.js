import React from 'react';
import Customer_1 from '../../assets/images/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Customer = () => {
    return (
        <div className="hero min-h-screen bg-accent">
            <div className="hero-content flex-col lg:flex-row gap-36">
                <img alt='#' src={Customer_1} className="max-w-xl rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-4xl text-start font-medium">Let us handle your <br /> screen <small className='text-primary font-bold text-4xl'>Professionally.</small></h1>
                    <p className="py-6 w-10/12 text-start">With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>
                    <div className='flex gap-x-40'>
                        <div>
                            <h1 className='text-primary font-bold text-4xl'>500 +</h1>
                        </div>
                        <div>
                            <h1 className='text-primary font-bold text-3xl py-2 text-start'>69 +</h1>
                            <p className='text-secondary mt-2'>Total Service</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;