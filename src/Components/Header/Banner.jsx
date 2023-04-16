import React from 'react';

const Banner = () => {
    return (
        <div className='flex gap-20 justify-between items-center pt-10'>
        <div className='flex flex-col gap-5 items-start w-1/3'>
            <h2 className='text-6xl tracking-wide'>One Step Closer To Your <span className='p'> Dream Job </span></h2>
            <h2 className=' text-sm text-gray-500'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</h2>
            <button className='modernBtn2'>Get Started</button>
        </div>
        <div className='w-2/3 flex items-end'>
            <img src={'/public/P3OLGJ1 copy 1.png'} alt="" />
        </div>
    </div>
    );
};

export default Banner;