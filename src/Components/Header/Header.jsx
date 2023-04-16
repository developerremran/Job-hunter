import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className='bannerBg'>
            <div className='flex justify-between items-center h-20 '>
                <Link to='/'>
                    <h2 className='text-4xl font-bold'>Job Hunter</h2>
                </Link>

                <ul className={`md:flex md:flex-row flex flex-col md:gap-5  font-semibold text-lg md:relative absolute md:top-0  ${!open ? 'top-36' : '-top-36'}`}>
                    <NavLink to='/Statistics' className='menuItemHover'>Statistics</ NavLink>
                    <NavLink to='/singleActiveJob' className='menuItemHover'>Applied Jobs</ NavLink>
                    <NavLink to='/blog' className='menuItemHover'>Blog</ NavLink>

                    <Link to='start-applying ' className='md:hidden'>
                        <button type="button" className="modernBtn ">Start Applying </button>
                    </Link>
                </ul>

                <Link to='start-applying' className='hidden md:block'>
                    <button type="button" className="modernBtn ">Start Applying </button>
                </Link>

                <div className='sm:block md:hidden' onClick={() => setOpen(!open)}>
                    <span>
                        {
                            open === true ?
                                <Bars3Icon className="h-6 w-6 text-blue-500" />
                                :
                                <XMarkIcon className="h-6 w-6 text-blue-500" />
                        }
                    </span>

                </div>
            </div>

            {/* banner section  */}

          
        </div>
    );
};

export default Header;