import React from 'react';
import { Link } from 'react-router-dom';


const MainJobCardItem = ({ jobData }) => {
    const { title, image, company_name, job_time, location, salary,id } = jobData
    return (
        <div className='border-2 p-5'>
            <img className='w-2/4' src={image} alt="" />
            <h2 className='text-xl font-bold'>{title}</h2>
            <h2 className='text-2xl text-gray-400 font-semibold mt-3 mb-3'>{company_name}</h2>
            <button className='border-2 p-2  rounded border-purple-500'>{job_time}</button> <br />
            <div className='flex gap-4 mt-4'>
                <p className='flex'><span>  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                </span>{location}</p>

                <p className='flex'><span><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </span>{salary}</p>
            </div>
           <Link to={`/job/${id}`}>
           <button type="button" class="mt-4 text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">View Job Details</button></Link>

        </div>
    );
};

export default MainJobCardItem;