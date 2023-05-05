
import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaSearchLocation, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'


const Footer = () => {

    return (
        <div>
            <footer className="footer ms-2 pb-24 pt-10 bg-primary mt-24 text-base-content">
                <div className='ms-16 flex gap-3'>
                    <FaSearchLocation className='text-white text-3xl' />
                    <div>
                        <p className='text-white text-start'>H#000 (0th Floor), Road #00, <br />
                            New DOHS, Mohakhali, Dhaka, Bangladesh
                        </p>
                    </div>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Company</span>
                    <Link to='#'>About</Link>
                    <Link to='#'>Project</Link>
                    <Link to='#'>Our Team</Link>
                    <Link to='#'>Terms Conditions</Link>
                    <Link to='#'>Submit Listing</Link>
                </div>
                <div className='text-white'>
                    <span className="footer-title">Quick Links</span>
                    <Link to='#'>Quick Links</Link>
                    <Link to='#'>Rentals</Link>
                    <Link to='#'>Sales</Link>
                    <Link to='#'>Contact</Link>
                    <Link to='#'>Our blog</Link>
                </div>
                <div className=' text-white'>
                    <span className="footer-title">About us</span>
                    <p className='w-64 text-start'>Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit. Purus commodo ipsum
                        duis laoreet maecenas. Feugiat </p>
                    <div className="flex gap-3">
                        <FaFacebook className='text-2xl' />
                        <FaInstagram className='text-2xl ' />
                        <FaLinkedin className='text-2xl ' />
                        <FaYoutube className='text-2xl ' />



                    </div>
                </div>
            </footer>
            <div><h1>all right by c developer solaiman</h1></div>
        </div>
    );
};

export default Footer;