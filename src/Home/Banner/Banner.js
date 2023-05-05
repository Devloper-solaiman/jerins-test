import React from 'react';
import beautifulImg from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen text-start bg-accent">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img alt='#' src={beautifulImg} className="max-w-lg rounded " />
                    <div>
                        <h1 className="text-5xl text-neutral font-bold">BEAUTY SALON <br />
                            FOR EVERY WOMEN</h1>
                        <p className="py-6 w-7/12">A beauty salon is a place where women can go to enhance their natural beauty or transform their looks with various beauty treatments. It offers a wide range of services such as haircuts, styling, coloring, facials, manicures, pedicures, and makeup application. The salon is designed to make women feel comfortable and relaxed.</p>
                        <button className="btn btn-primary ">Get an Appointment</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;