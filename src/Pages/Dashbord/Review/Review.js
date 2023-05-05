import React from 'react';

const Review = () => {
    return (
        <div className='w-6/12'>
            <div className="form-control">
                <label className="label">

                </label>
                <input type="text" placeholder="Name" className="input input-bordered" />
            </div>
            <div className="form-control">
                <label className="label">
                </label>
                <input type="eamil" placeholder="@gamil.com" className="input input-bordered" />

                <textarea placeholder="Your Fidback" className="textarea textarea-bordered h-52 w-auto textarea-lg mt-5" ></textarea>

            </div>
            <div className="form-control w-2/6 mt-6">
                <button className='btn btn-primary'><input type="submit" value="Submit" /> </button>
            </div>

        </div>
    );
};

export default Review;