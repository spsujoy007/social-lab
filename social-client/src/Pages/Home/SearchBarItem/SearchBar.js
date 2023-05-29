import React from 'react';
import '../Home.css'
import webLogo from '../../../assests/sitelogo.png'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
    return (
        <div className='rounded-xl'>
            <div className='flex items-center gap-2'>
                <img className='lg:w-14 w-10' src={webLogo} alt="" />

                <div className='flex w-full items-center'>
                <input className='bg-white  pl-3 py-3 pr-11 w-full rounded-full outline-none commonShadow text-primary' type="text" placeholder='search something' />

                <FiSearch className='text-3xl -ml-[40px] text-primary'></FiSearch>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;