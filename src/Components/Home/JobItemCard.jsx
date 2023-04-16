import React from 'react';

const JobItemCard = ({ jobItem }) => {
    console.log(jobItem)
    return (
        <div className='border-2 flex flex-col gap-5 p-5 cardItem'> 
            <img className='w-1/4' src={jobItem.icon} alt={jobItem.name} />
            <h3 className='font-bold'>{jobItem.name}</h3>
            <p className='text-sm text-gray-600'>{jobItem.description}</p>
        
        </div>
    );
};

export default JobItemCard;