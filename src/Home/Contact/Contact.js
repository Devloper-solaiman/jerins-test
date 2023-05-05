import React from 'react';

const Contact = () => {
    return (
        <div>
            <div class="flex justify-center items-center w-screen h-screen bg-white">

                <div class="container mx-auto my-4 px-4 lg:px-20">

                    <div class="w-full ms-44 p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto  rounded-2xl shadow-xl">

                        <h1 class="font-bold  text-4xl mb-24">Let us handle your <br />project, professionally.</h1>

                        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Full Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email Address*" />
                            <input class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone Number*" />
                        </div>
                        <div class="my-4">
                            <textarea placeholder="Your Message*" class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <button class="btn btn-primary "> Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;