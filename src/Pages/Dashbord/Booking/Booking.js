import React from 'react';

const Booking = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-neutral-content">
            <div className="card-body">
                <h2 className="card-title">
                    <label className="input-group">
                        <input type="text" placeholder="users name" className="input " />
                    </label>
                </h2>
                <label className="input-group">
                    <input type="text" placeholder="users@gmail.com" className="input " />
                </label>
                <label className="input-group">
                    <input type="text" placeholder="any titment name" className="input " />
                </label>
                <div className="card-actions justify-end">
                    <h1 className='text-neutral '>Your Service  charged will be <small className='font-bold'>$1000</small></h1>
                    <button className="btn btn-primary">Pay</button>
                </div>
            </div>
        </div>
    );
};

export default Booking;