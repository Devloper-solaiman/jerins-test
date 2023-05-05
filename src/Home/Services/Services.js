import React from 'react';
import Treatment_1 from '../../assets/icons/Group 1373.png'
import Treatment_2 from '../../assets/icons/Group 1372.png'
import Treatment_3 from '../../assets/icons/Group 1374.png'

const Services = () => {
    return (
        <>
            <h3 className="text-4xl text-neutral font-bold">Our Awesome <small className='text-primary'>Services</small></h3>
            <div className='flex pt-24 gap-20'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Treatment_1} alt="Shoes" className="rounded-xl w-32 h-32" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl text-neutral">Anti Age Face Treatment</h2>
                        <p className='text-primary text-lg font-bold '>$ 69 </p>
                        <div className="card-actions">
                            <p className='text-ptext text-start ps-5'>Anti age face treatment aims to rejuvenate and refresh the skin, reducing fine lines and wrinkles. It may involve the use of skincare products, facials, peels, and other non-invasive procedures.</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Treatment_2} alt="Shoes" className="rounded-xl w-32 h-32" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl text-neutral">Hair Color & Styleing</h2>
                        <p className='text-primary text-lg font-bold '>$ 199 </p>
                        <div className="card-actions">
                            <p className='text-ptext text-start ps-5'>Hair coloring and styling can transform one's appearance. From bold and bright colors to natural hues, a skilled stylist can create a look that complements one's features and personality.</p>
                        </div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src={Treatment_3} alt="Shoes" className="rounded-xl w-32 h-32" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold text-xl text-neutral">Skin Care Treatment</h2>
                        <p className='text-primary text-lg font-bold '>$ 469 </p>
                        <div className="card-actions">
                            <p className='text-ptext text-start ps-5'>A skin care treatment can improve the health and appearance of the skin. It may involve cleansing, exfoliating, and moisturizing, and can be customized for individual skin types.</p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary mt-24 px-12">Explore more</button>
        </>
    );
};

export default Services;