import React from 'react';

const BookingList = () => {
    const tab = [
        <>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
        </>
    ]
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>{tab}</tr>
                    <tr className="hover"> {tab}</tr>
                    <tr>{tab}</tr>
                </tbody>
            </table>
        </div>
    );
};

export default BookingList;