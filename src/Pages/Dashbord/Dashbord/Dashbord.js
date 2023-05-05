import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import icon_img from '../../../assets/logo.png'
import Book_icon from '../../../assets/icons/Group.png'
import Book_list from '../../../assets/icons/Group 1360.png'
import Book_Review from '../../../assets/icons/Group 1368.png'

const Dashbord = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <div className="mt-10 mb-20 grid ">

                    <h2 className='text-xl font-bold text-neutral col-start-1 col-end-2 '>Book</h2>
                    <h2 className=' text-neutral font-semibold col-start-6 col-end-7 '>Pro Rasel</h2>
                </div>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label form="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    <small className='w-24 mt-9 mb-16'><img src={icon_img} alt="" /></small>
                    {/* <!-- Sidebar content here --> */}
                    <li><Link className='font-bold link-primary' to="/dashbord"><small><img className='w-5' src={Book_icon} alt="" /></small><small>Book</small></Link></li>
                    <li><Link className='font-bold link-primary' to="/dashbord/bookinglist"><small><img className='w-5' src={Book_list} alt="" /></small><small>Booking list</small></Link></li>
                    <li><Link className='font-bold link-primary' to="/dashbord/review"><small><img className='w-5' src={Book_Review} alt="" /></small><small>Review</small></Link></li>

                    {/* <li><Link to="/dashboard/review">My Reviews</Link></li>
                    <li><Link to="/dashboard/history">My History</Link></li>

                    <li><Link to="/dashboard/users">All Users</Link></li>
                    <li><Link to="/dashboard/addDoctor">Add Doctor</Link></li>
                    <li><Link to="/dashboard/manageDoctors">Manage Doctors</Link></li> */}


                </ul>

            </div>
        </div>
    );
};

export default Dashbord;