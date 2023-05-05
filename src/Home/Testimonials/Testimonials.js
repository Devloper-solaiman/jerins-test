import React from 'react';
import star from '../../assets/icons/Group 33040.png'
import Testimonial_1 from '../../assets/images/Ellipse 90.png'
import Testimonial_2 from '../../assets/images/Ellipse 91.png'
import Testimonial_3 from '../../assets/images/Ellipse 92.png'
import Testimonial_4 from '../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'


const Testimonials = () => {
    const color = [
        <>
            <input type="radio" name="rating-7" className="rating-hidden" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400 " />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400" checked />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-500" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-1 bg-orange-400" />
            <input type="radio" name="rating-7" className="mask mask-star-2 mask-half-2 bg-orange-500" />
        </>
    ]
    return (
        <div>
            <h1 className="text-4xl text-neutral font-bold mb-24">Testimonials</h1>
            <div className="carousel rounded-box ms-14">
                <div id='item1' className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_1} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p className='indent-5 antialiased font-serif'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_2} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Miriam Barron </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start font-serif text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_3} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start font-serif text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='item2' className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
                <div id='item3' className="carousel-item">
                    <div className="card w-96">
                        <div className='flex gap-2'>
                            <div><img src={Testimonial_4} alt="Shoes" className="rounded-full ms-7 w-16 h-16" /></div>
                            <div> <h1 className='font-bold text-2xl text-neutral'>Nash Patrik </h1>
                                <p className='text-sm text-start font-semibold'>CEO, Manpol</p>
                            </div>
                        </div>

                        <div className="card-body items-start text-start">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                            <div className="rating rating-md rating-half">
                                {color}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Testimonials;