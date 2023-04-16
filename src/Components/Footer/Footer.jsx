import React from 'react';


const Footer = () => {
    return (
        <div className='grid grid-cols-5 gap-10 py-10 px-10'>
            <div>
                <h2 className='mb-5 text-4xl font-bold text-white'>Job Hunter</h2>
                <p className='text-gray-300'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                <div className='flex gap-4 mt-5'>
                <img className='w-10 h-10' src={'/src/Components/Footer/facebook.png'}alt="" />
                <img className='w-10 h-10' src={'/src/Components/Footer/twitter.png'}alt="" />
                <img className='w-10 h-10' src={'/src/Components/Footer/youtube.png'}alt="" />
                </div>

            </div>
            <div>
               <h2 className='text-3xl text-white'>Company</h2>
               <ul className='text-gray-300'>
                <li>About</li>
                <li>Works</li>
                <li>Latest News</li>
                <li>Career</li>
               </ul>
            </div>
            <div>
                <h2 className='text-3xl text-white'>Product</h2>
                <ul className='text-gray-300'>
                <li>About</li>
                <li>Works</li>
                <li>Latest News</li>
                <li>Career</li>
               </ul>
            </div>
            <div>
            <h2 className='text-3xl text-white'>Support</h2>
                <ul className='text-gray-300'>
                <li>About</li>
                <li>Works</li>
                <li>Latest News</li>
                <li>Career</li>
               </ul>
            </div>
            <div>
            <h2 className='text-3xl text-white'>Contact</h2>
                <ul className='text-gray-300'>
                <li>About</li>
                <li>Works</li>
             
               </ul>
            </div>
           
        </div>
    );
};

export default Footer;