import React, { useEffect, useState } from 'react';
import JobItemCard from './JobItemCard';
import { useLoaderData } from 'react-router-dom';
import MainJobCardItem from './MainJobCardItem';
import Banner from '../Header/Banner';

const Home = () => {
    const [jobData, setJobData] = useState([])

    useEffect(() => {
        fetch('/public/JobItemsData/jobsItemsData.json')
            .then(res => res.json()).then(data => setJobData(data))

    }, [])

    const jobItems = jobData.jobDataITem;

    const mainJobData = useLoaderData();

    return (
        <>
        <div>
            <Banner></Banner>
        </div>
            <div className='text-center mt-40'>
                <h2 className='text-6xl font-bold uppercase'>Job Category List</h2>
                <p className='text-sm text-gray-500 mt-5'>Explore thousands of job opportunities with  all the information you need. <br /> Its your future</p>
            </div>

                <div className='grid grid-cols-4 gap-5 mt-20'>
                    {jobItems && jobItems.map(jobItem => <JobItemCard jobItem={jobItem} key={jobItem.name}></JobItemCard>)}
                </div>

                {/* Feture Jobs Item set  */}

                <div className='text-center mt-40'>
                <h2 className='text-6xl font-bold uppercase'>Featured Jobs</h2>
                <p className='text-sm text-gray-500 mt-5'>Explore thousands of job opportunities with  all the information you need. <br /> Its your future</p>
                </div>
                  <div className=' grid grid-cols-2 gap-20 mt-20'>
                    {
                       mainJobData.map(jobData => <MainJobCardItem jobData={jobData} key={jobData.id}></MainJobCardItem>) 
                    }
                    
                  </div>
                  <div className='text-center mt-10'>
                  <button type="button" class="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2">See all Job</button>
                  </div>

                
            

            






            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br />
        </>
    );
};

export default Home;