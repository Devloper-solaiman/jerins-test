import React from 'react';
import Navbar from '../../Share/Navbar/Navbar';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Customer from '../Customer/Customer';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
import Footer from '../../Share/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Customer></Customer>
            <Testimonials></Testimonials>
            <Contact></Contact>
            <Footer></Footer>

        </div>
    );
};

export default Home;